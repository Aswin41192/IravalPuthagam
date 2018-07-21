import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent{
  name:String;
  email:String;
  book:String;
  author:String;
  mobile:number;
  option:String='';
  constructor(private router:Router){
 }

 navigateToHome(){
   console.log('arrived');
  this.router.navigate(['']);
 }
 }
 
