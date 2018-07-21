import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject=new Subject<any>();
  constructor() { }

  getMessage():Observable<any>{
    return this.subject.asObservable();
  }

  setMessage(message:any){
    console.log('Items added in cart:'+message);
    this.subject.next({'msg':message});
  }
}
