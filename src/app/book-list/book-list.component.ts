import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/http/book-service.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MessageService } from '../service/utility/message.service';
import { DataTransferService } from '../service/utility/data-transfer.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  response: Book[]=[];  
  @Input() books: Book[];
  booksInCart: Book[] = [];
  book: Book;
  hideBtn = false;
  constructor(private bookSVC: BookService, private route: ActivatedRoute, private router: Router,
    private msgService: MessageService,private dts:DataTransferService,
    private spinner: NgxSpinnerService) {
    
  }

  selectedBook(book) {
    this.book = book;
    this.hideBtn = this.getIndex(book) > -1 ? true : false;
   console.log(this.booksInCart)
  }

  ngOnInit(): void { 
    if(this.route.snapshot.data['books']){
     this.books=this.route.snapshot.data['books'].json();
     console.log(this.books);
  }
  }

  ngOnDestroy(): void {
    
  }

  addToCart(book: Book) {
    this.booksInCart=this.dts.getSelectedItems();
    this.booksInCart.push(book);
    this.sendMessage(this.booksInCart);
    this.hideBtn = true;
  }

  removeFromCart(book: Book) {
    this.booksInCart=this.dts.getSelectedItems();
    let index = this.getIndex(book);
    this.booksInCart.splice(index, 1);
    this.sendMessage( this.booksInCart);
    this.hideBtn = false;
  }

  getIndex(book: Book): number {
    this.booksInCart=this.dts.getSelectedItems();
    return this.booksInCart.findIndex(x => x['name'] === book['name']);
  }

  sendMessage(message: any) {
    this.msgService.setMessage(message);
  }
}
