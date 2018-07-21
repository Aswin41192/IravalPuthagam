import { Component, OnInit, OnDestroy,ViewChild, ElementRef} from '@angular/core';
import { Book } from './model/book';
import { BookService } from './service/http/book-service.service';
import { Router,NavigationEnd,NavigationCancel } from '@angular/router';
import { MessageService } from './service/utility/message.service';
import { Subscription } from 'rxjs';
import { DataTransferService } from './service/utility/data-transfer.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
 public loading:boolean=true;  
     @ViewChild('searchString') el:ElementRef;

  ngOnInit(): void {
    this.spinner.show()
  }
  selectedItems:number;
  subscription: Subscription;
  mySubscription:Subscription;
   title = 'Iraval Puthagam';
  languages = ['Tamil', 'English'];
  
   constructor(private router:Router,private msgService:MessageService,private dts:DataTransferService,
  private spinner:NgxSpinnerService) {
    this.subscription= msgService.getMessage().subscribe(message=>{
      console.log('notified')
      this.selectedItems= message['msg'].length;
     })
  this.mySubscription = this.router.events.subscribe((event) => {
       console.log(event)
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
           console.log('Event occured')
           console.log(this.el.nativeElement.value);
           this.spinner.hide();
      }
      else {
        this.spinner.show();
      }

       
    });
    
  }

  languageChange(lang){
    this.router.navigate(['/books', lang.value]);
  }
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.mySubscription.unsubscribe();
  }

  search(searchString){
       this.router.navigate(['search',searchString]);
  }
}
