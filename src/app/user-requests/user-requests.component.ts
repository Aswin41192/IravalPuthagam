import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserRequest } from '../model/user-request';
import { BookService } from '../service/http/book-service.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
  
})
export class UserRequestsComponent implements OnDestroy {


  public userRequest: UserRequest;
  private sub: Subscription;
  private navigate=false;
  constructor(private router: Router, private bookSVC: BookService, private spinner: NgxSpinnerService) {
      this.userRequest=new UserRequest();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  createRequest(request) {
    this.sub = this.bookSVC.createUserRequest(request).subscribe(response => {
      if (response && response.json() == 1) {
        this.navigate=true;
      } else {
        window.alert("Error Occured!!");
      }
    })

  }

  navigateToHome(){
    console.log('Navigating to home');
    this.router.navigate(['']);

  }
}

