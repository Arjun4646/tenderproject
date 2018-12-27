import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbbcComponent } from './abbc/abbc.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'Home', component: HomeComponent},
  {path:'abbc', component: AbbcComponent},
  {path:'product', component: ProductComponent},
  {path:'search', component: SearchComponent},
  {path:'customer', component:CustomerComponent},
  {path:'', redirectTo:'Home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AbbcComponent]
