import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataTransferService } from 'app/service/utility/data-transfer.service';
import { MessageService } from 'app/service/utility/message.service';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class CartResolverService implements Resolve<any> {


  private subscription: Subscription;
  constructor(private msgService: MessageService,private dts:DataTransferService,
  private spinner:NgxSpinnerService) { 
    }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Inside Cart Resolver:')
    
    return this.dts.getSelectedItems(); 
  }

 
}
