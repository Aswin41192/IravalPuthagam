import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BookService } from 'app/service/http/book-service.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable()
export class BookResolverService implements Resolve<any> {
  private language:String;
  constructor(private bookSVC:BookService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.bookSVC.getBooks();
  }
}
