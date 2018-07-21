import { Injectable, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { Book } from '../../model/book';

@Injectable()
export class BookService{

  constructor(private http: Http) { }

  public getBooks(){
    return this.http.get('https://my-json-server.typicode.com/Aswin41192/demo/books');
  }

  public getBooksByAuthor(name:string){
    return this.http.get('https://my-json-server.typicode.com/Aswin41192/demo/books?author='+name);
  }

  public updateAvailability(book:Book){
    return this.http.put('https://my-json-server.typicode.com/Aswin41192/demo/books/'+book.id,book);
  }
}
