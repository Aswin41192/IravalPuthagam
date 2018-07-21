import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'app/service/utility/message.service';
import { Book } from '../model/book';
import { Router } from '@angular/router';
import { BookService } from '../service/http/book-service.service';
import { DataTransferService } from '../service/utility/data-transfer.service';
import { Subscription } from 'rxjs';

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

  submitData(){
    console.log('Inside Submit data')
    this.msgService.setMessage(this.emptyCart);
    this.router.navigate(['']);
  }

  updateBookAvailablity(){
    console.log('The sekected Items are:'+JSON.stringify(this.dts.getSelectedItems()));
    this.selectedItems=this.dts.getSelectedItems();
    this.selectedItems.map(item=>{
      item.available=false;
      return item;
    }).
    forEach(book=>{
      this.subscription=  this.bookSVC.updateAvailability(book).subscribe(/*msg=>{
        console.log("Book Updated!!:"+msg)
      }*/);
    })
  }

}
