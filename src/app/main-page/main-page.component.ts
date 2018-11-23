import {Component, Input, OnInit} from '@angular/core';
import {Tabs} from '../tabs-panel/tabs';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {OrdersService} from '../orders.service';
import {Observable, of} from 'rxjs/index';
import {TABS} from '../tabs-panel/mock-tabs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public tab: Tabs;

  constructor(private route: ActivatedRoute,
              private ordersService: OrdersService,
              private location: Location) {
  }

  ngOnInit() {
    this.getTab();
  }

  // getTab(): Observable<Tabs[]> {
  //   return of(TABS);
  // }

  getTab(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ordersService.getTab(id).subscribe(tab => this.tab = tab);
  }

}
