import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from 'app/model/book';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy {

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  searchResults:Book[]=[]
  response:Book[]=[];
  searchString:string;
  subscription:Subscription;
  constructor(private router:ActivatedRoute,private route:Router) {
    this.response=[]
    this.subscription=this.route.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.searchString=this.router.snapshot.params['searchString'];
        this.searchResults=this.router.snapshot.data['searchResults'].json();
      }
    })
   }

  ngOnInit() {
    this.searchString=this.router.snapshot.params['searchString'];
   this.searchResults=this.router.snapshot.data['searchResults'].json();
   //this.populateResults(this.response);
  }
}
