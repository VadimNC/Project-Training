import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import {Order} from '../order';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [OrderService]
})
export class MainPageComponent implements OnInit {
  items: Order[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.items = this.orderService.getAllUserOrders();
  }
}
