import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { BookResolverService } from '../service/resolver/book-resolver.service';
import { BookListComponent } from '../book-list/book-list.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { CartComponent } from '../cart/cart.component';
import { CartResolverService } from '../service/resolver/cartresolver.service';
import { ViewCartGuard } from '../service/guards/view-cart.service';
import { AuthorComponent } from 'app/author-component/author-component.component';
import { AuthorResolverService } from 'app/service/resolver/author-resolver.service';
import { SearchComponent } from '../search/search.component';
import { SearchResolverService } from '../service/resolver/searchresolver.service';
import { UserDetailComponent } from 'app/userdetail/userdetail.component';
import { UserRequestsComponent } from '../user-requests/user-requests.component';

const routes:Routes=[{
path:'',
  redirectTo:'books',
  pathMatch:'full'
},{
  path:'books',
  component:BookListComponent,
resolve:{
  books:BookResolverService
}
},
{
  path:'books/tamil',
component:BookListComponent,
resolve:{
  books:BookResolverService
}
},{
  path:'bookDetail',
  component:BookDetailComponent
},{
  path:'cart',
  resolve:{
    'cart':CartResolverService
  },
  canActivate:[ViewCartGuard],
  component:CartComponent
},{
  path:'author/:name',
  component:AuthorComponent,
  resolve:{
    author:AuthorResolverService
  }
},{
  path:'search/:searchString',
  component:SearchComponent,
  resolve:{
    'searchResults':SearchResolverService
  }
},{
  path:'checkout',
  component:UserDetailComponent
},{
  path:'request',
  component:UserRequestsComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{
      onSameUrlNavigation:'reload'
    })
  ],
  exports:[RouterModule],
  declarations: [],
  providers:[BookResolverService]
})
export class AppRoutingModule { }
