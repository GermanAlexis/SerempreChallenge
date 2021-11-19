import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { ProductComponent } from './core/product/product.component';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './shared/colors/colors.component';
import { WarrantyComponent } from './shared/warranty/warranty.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ColorsComponent,
    WarrantyComponent,
    FeatureComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
