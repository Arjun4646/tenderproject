import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ProductService } from './product.service';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AbbcComponent } from './abbc/abbc.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { GrdFilterPipe } from './grd-filter.pipe';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbbcComponent,
    ProductComponent,
    AboutComponent,
    SearchComponent,
    GrdFilterPipe,
    CustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

