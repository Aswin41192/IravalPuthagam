import { Injectable, OnDestroy } from '@angular/core';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';
import { Book } from 'app/model/book';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService implements OnDestroy {
  private subscription: Subscription;
  private selectedItems: Book[] = [];

  
  constructor(private msgService: MessageService) {
    this.subscription = msgService.getMessage().subscribe(message => {
      this.selectedItems = message['msg'];
    });
  }

  getSelectedItems(): Book[] {
    return this.selectedItems;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
