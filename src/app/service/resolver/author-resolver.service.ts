import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BookService } from '../http/book-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorResolverService  implements Resolve<any>{

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let author=route.params['name'];
      console.log('Author Received:'+author)
      return this.bookSVC.getBooksByAuthor(author);
  }
  constructor(private bookSVC:BookService) { }
}
