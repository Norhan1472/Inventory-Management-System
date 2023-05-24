import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ServerListComponent } from './server-list/server-list.component';
import { TestComponent } from './test/test.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LogInActivateService } from './servicesAuthentication/activate/log-in-activate.service';
import { RouteActivateService } from './servicesAuthentication/activate/route-activate.service';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryListComponent } from './history-list/history-list.component';

const routes: Routes = [//redirectTo: "getALLProducts"
  {path:'history',component:HistoryListComponent,canActivate:[RouteActivateService]},
  {path:'homePage',component:HomePageComponent,canActivate:[RouteActivateService]},
  {path:'signIn', component:AuthenticationComponent,canActivate:[LogInActivateService]},
  {path:'getALLProducts', component:ProductListComponent,canActivate:[RouteActivateService]},
  {path:'getALLCategory' ,component:CategoryListComponent,canActivate:[RouteActivateService]},
  {path:'addCategory',component:CreateCategoryComponent,canActivate:[RouteActivateService]},
  {path:'addProduct',component:CreateProductComponent,canActivate:[RouteActivateService]},
  {path:'getAllBrands',component:BrandListComponent,canActivate:[RouteActivateService]},
  {path:'addBrand',component:CreateBrandComponent,canActivate:[RouteActivateService]},
  {path:'updateBrand/:id',component:UpdateBrandComponent,canActivate:[RouteActivateService]},
  {path:'getCategoryById/:id',component:CategoryDetailsComponent,canActivate:[RouteActivateService]},
  {path:'updateCategory/:id',component:UpdateCategoryComponent,canActivate:[RouteActivateService]},
  {path:'updateProduct/:id',component:UpdateProductComponent,canActivate:[RouteActivateService]},
  {path:'getProductById/:id',component:ProductDetailsComponent,canActivate:[RouteActivateService]},
  {path:'getAllOrders',component:OrderListComponent,canActivate:[RouteActivateService]},
  {path:'getOrderById/:id',component:OrderDetailsComponent,canActivate:[RouteActivateService]},
  {path:'addOrder',component:CreateOrderComponent,canActivate:[RouteActivateService]},
  {path:'getAllServers',component:ServerListComponent,canActivate:[RouteActivateService]},
  {path:"" ,component:AuthenticationComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


