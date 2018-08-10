import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'app/service/utility/message.service';
import { Book } from '../model/book';
import { Router } from '@angular/router';
import { BookService } from '../service/http/book-service.service';
import { DataTransferService } from '../service/utility/data-transfer.service';
import { Subscription } from 'rxjs';
import { PurchasedItems } from '../model/purchased-items';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserDetailComponent implements OnInit,OnDestroy {

  
    selectedItems:Book[]=[];
  constructor(private msgService:MessageService,private router:Router,private bookSVC:BookService,
    private dts:DataTransferService) { }
  userForm:FormGroup;
  name=new FormControl('',Validators.required);
  email=new FormControl('',[Validators.required,Validators.email]);
  address=new FormControl('',Validators.required);
  phone=new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]);
  emptyCart:Book[]=[]; 
  subscription:Subscription;

  ngOnInit() {
    this.createFormControls();
  }

  ngOnDestroy(): void {
    if(this.subscription)
   this.subscription.unsubscribe();
  }

  createFormControls(){
    this.userForm=new FormGroup({
      name:this.name,
      email:this.email,
      address:this.address,
      phone:this.phone
    })
  }

  submitData(form){
   
    let purchasedItems={
     'items': this.dts.getSelectedItems(),
     'userDetails':form
    }
    this.subscription=this.bookSVC.createOrder(purchasedItems).subscribe(message=>{
      console.log(message);
      if(message && message.json()==1){
        this.msgService.setMessage(this.emptyCart);
      }else{
        window.alert("Error occured !");
      }
    });
  }

  navigateToHome(){
    this.msgService.setMessage(this.emptyCart);
    this.router.navigate(['']);
  }
}
