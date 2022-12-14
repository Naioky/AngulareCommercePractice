import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FiltersComponent } from './components/shared/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/shared/bookstore-app/product-list/product-list.component';
import { BookstoreAppComponent } from './components/shared/bookstore-app/bookstore-app.component';
import { ProductItemComponent } from './components/shared/bookstore-app/product-list/product-item/product-item.component';
import { BooksService } from './components/shared/bookstore-app/product-list/product-list.component.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    ProductListComponent,
    BookstoreAppComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
