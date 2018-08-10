import { Component, OnInit, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../service/http/book-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.css']
})
export class AuthorComponent implements OnInit{
  booksByAuthor:Book[]=[];
  
  constructor(private router:ActivatedRoute,private bookSVC:BookService) { }

  ngOnInit() {
    this.booksByAuthor= this.router.snapshot.data['author'].json();
    console.log(this.booksByAuthor)
  }

}
