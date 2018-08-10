import { Injectable, OnDestroy } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Subscription } from 'rxjs';
import { Book } from '../../model/book';
import { UserRequest } from '../../model/user-request';

const CONTEXT='http://localhost:8080/bookstore';

@Injectable()
export class BookService{

  private options:RequestOptions;
  
  constructor(private http: Http) { 
    let header=new Headers();
    header.append( 'content-type','application/json')
    let options=new RequestOptions({
      headers:header
    });
  }

  public getBooks(){
   // return this.http.get('https://my-json-server.typicode.com/Aswin41192/demo/books');
   return this.http.get(CONTEXT+'/books/get');
  }

  public getBooksByAuthor(name:string){
   // return this.http.get('https://my-json-server.typicode.com/Aswin41192/demo/books?author='+name);
   return this.http.get(`${CONTEXT}/books/getByAuthor/${name}`);
  }

  public search(criteria:String) {
    return this.http.get(`${CONTEXT}/books/search/${criteria}`);
  }

  public createOrder(books) {
    return this.http.post(`${CONTEXT}/createOrder`,books);
  }

  public createUserRequest(userRequest:UserRequest){
    return this.http.post(`${CONTEXT}/user/request`,userRequest);
  }
}
