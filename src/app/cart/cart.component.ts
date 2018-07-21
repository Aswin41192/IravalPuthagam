import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/utility/message.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'app/model/book';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    selectedItems:Book[]=[];  
    price:number=0;
   constructor(private route:ActivatedRoute,private msgService:MessageService,
    private spinner:NgxSpinnerService,private router:Router) {  
    this.selectedItems= this.route.snapshot.data['cart']
  }

  ngOnInit() {
     this.calculatePrice(this.selectedItems);
    }

  ngOnDestroy(): void {
  }

  getIndex(book: Book): number {
    return this.selectedItems.findIndex(x => x['name'] === book['name']);
  }

  removeFromCart(book: Book){
    this.price=0;
    let index=this.getIndex(book);
    this.selectedItems.splice(index,1);
    this.calculatePrice(this.selectedItems);
    this.msgService.setMessage(this.selectedItems);
  }

  calculatePrice(books:Book[]){
    books.forEach(book=>{
        this.price=this.price+book['price'];
    })
  }

  checkout(){
    this.router.navigate(['/checkout'])
  }
}
