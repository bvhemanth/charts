import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './dashboard/orders/orders.component';


import {
  ButtonModule,
  ChartModule,
  DialogModule,
  InputTextModule,
  PanelModule,
  SharedModule,
  SidebarModule,
  TreeModule
} from 'primeng/primeng';
import { NewcustomersComponent } from './newcustomers/newcustomers.component';
import { ExistingcustComponent } from './existingcust/existingcust.component';
import { OrderdeliveredComponent } from './orderdelivered/orderdelivered.component';
import { OrdernotdeliveredComponent } from './ordernotdelivered/ordernotdelivered.component';
import { OrdercancelledComponent } from './ordercancelled/ordercancelled.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    NewcustomersComponent,
    ExistingcustComponent,
    OrderdeliveredComponent,
    OrdernotdeliveredComponent,
    OrdercancelledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    ButtonModule,
    ChartModule,
    DialogModule,
    InputTextModule,
    PanelModule,
    SharedModule,
    SidebarModule,
    TreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
