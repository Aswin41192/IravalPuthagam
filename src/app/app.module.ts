import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookService } from './service/http/book-service.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CartComponent } from './cart/cart.component';
import { MessageService } from './service/utility/message.service';
import { DataTransferService } from './service/utility/data-transfer.service';
import { ViewCartGuard } from 'app/service/guards/view-cart.service';
import { AuthorComponent} from './author-component/author-component.component';
import { SearchComponent } from './search/search.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { UserDetailComponent } from './userdetail/userdetail.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    CartComponent,
    AuthorComponent,
    SearchComponent,
    UserDetailComponent,
    UserRequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [BookService,NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
