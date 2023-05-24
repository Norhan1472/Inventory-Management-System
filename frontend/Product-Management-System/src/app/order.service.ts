import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './orders';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseLink = "http://localhost:8080/api/order/v1/"
  constructor(private httpClient:HttpClient) { }
  getAllOrders():Observable<Orders[]>{
    return this.httpClient.get<Orders[]>(`${this.baseLink+"getAllOrders"}`);
  }
  getAllProductsOfOrder(orderId:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseLink+"getAllProductsOfOrder/"}${orderId}`);
  }
  getOrderById(orderId:number):Observable<Orders>{
    return this.httpClient.get<Orders>(`${this.baseLink+"getOrderById/"}${orderId}`);
  }
  addOrder(order:Orders):Observable<Orders>{
    return this.httpClient.post<Orders>(`${this.baseLink+"addOrder"}`,order);
  }//assignOrderWithProduct/{orderId}/product/{productSerialNumber}
  assignOrderWithProduct(orderId:number,productSerialNumber:string):Observable<Orders>{
    return this.httpClient.put<Orders>(`${this.baseLink}assignOrderWithProduct/${orderId}/product/${productSerialNumber}`,null);
  }
  deleteOrderById(id:number):Observable<Boolean>{
    return this.httpClient.delete<Boolean>(`${this.baseLink}deleteOrderById/${id}`);
  }
  
}
