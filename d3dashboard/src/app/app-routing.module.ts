import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { NewcustomersComponent } from './newcustomers/newcustomers.component';
import { ExistingcustComponent } from './existingcust/existingcust.component';
import { OrderdeliveredComponent } from './orderdelivered/orderdelivered.component';
import { OrdernotdeliveredComponent } from './ordernotdelivered/ordernotdelivered.component';
import { OrdercancelledComponent } from './ordercancelled/ordercancelled.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent},
  { path: 'orders', component: OrdersComponent },
  { path: 'newcust', component: NewcustomersComponent },
  { path: 'existing', component: ExistingcustComponent },
  { path: 'orderdeliver', component: OrderdeliveredComponent },
  { path: 'ordernot', component: OrdernotdeliveredComponent },
  { path: 'ordercancel', component: OrdercancelledComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
