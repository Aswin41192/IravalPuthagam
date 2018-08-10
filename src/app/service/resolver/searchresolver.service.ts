import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BookService } from 'app/service/http/book-service.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResolverService implements Resolve<any> {

  constructor(private bookSVC:BookService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let criteria=route.params['searchString'];
    return this.bookSVC.search(criteria);
  }
  
}
