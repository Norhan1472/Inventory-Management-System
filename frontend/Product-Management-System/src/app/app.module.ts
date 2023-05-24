import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CreateCategoryComponent } from './create-category/create-category.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { GenerateFieldComponent } from './generate-field/generate-field.component';
import { ServerListComponent } from './server-list/server-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CommonModule } from '@angular/common';
import { HttpInterceptorAuthService } from './http-interceptor-auth.service';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryListComponent } from './history-list/history-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    CreateCategoryComponent,
    TestComponent,
    CreateProductComponent,
    BrandListComponent,
    CreateBrandComponent,
    UpdateBrandComponent,
    CategoryDetailsComponent,
    UpdateCategoryComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    OrderListComponent,
    OrderDetailsComponent,
    CreateOrderComponent,
    GenerateFieldComponent,
    ServerListComponent,
    AuthenticationComponent,
    HomePageComponent,
    HistoryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorAuthService,multi:true}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
