import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataTransferService } from '../utility/data-transfer.service';

@Injectable({
  providedIn: 'root'
})
export class ViewCartGuard implements CanActivate {

  constructor(private dts:DataTransferService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      if(this.dts.getSelectedItems().length>0)
      return true;
      else{
        window.alert("No items in the cart!!!!");
        return false;
      }
  }
  
}
