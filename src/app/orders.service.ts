import {Injectable} from '@angular/core';
import {Tabs} from './tabs-panel/tabs';
import {TABS} from './tabs-panel/mock-tabs';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() {
  }

  public getTabs(): Observable<Tabs[]> {
    return of(TABS);
  }

  public getTab(id: number): Observable<Tabs> {
    return of(TABS.find(tab => tab.id === id));
  }
}
