import {Component, OnInit} from '@angular/core';
import {Tabs} from './tabs';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-tabs-panel',
  templateUrl: './tabs-panel.component.html',
  styleUrls: ['./tabs-panel.component.css']
})
// export class TabsPanelComponent implements OnInit {
//   public selectedTabs: Tabs;
//   public tabs: Tabs[];
//
//   constructor(private ordersService: OrdersService) {
//   }
//
//   private getOrders(): void {
//     this.ordersService.getTabs().subscribe(tabs => this.tabs = tabs);
//   }
//
//   ngOnInit() {
//     this.getOrders();
//   }
//
//   public onSelect(tabs: Tabs): void {
//     this.selectedTabs = tabs;
//   }
// }

export class TabsPanelComponent implements OnInit {
  tabs: Tabs[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.getTabs();
  }

    getTabs(): void {
    this.ordersService.getTabs().subscribe(tabs => this.tabs = tabs);

  }
}
