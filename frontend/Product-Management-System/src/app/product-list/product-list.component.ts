import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ExcelService } from '../excel.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products!:Product[];

  ngOnInit(): void {
    this.getAllProducts();
  }
  constructor(private productservice:ProductService,private router :Router,private excelService:ExcelService){

  }
  getAllProducts(){
    this.productservice.getAllProduct().subscribe(data=>{
      console.log("list All Products");
      console.log(data);
      this.products=data;
  },
  (error)=>{
    console.log(error);
  }
  );
  }
  goToAddProduct(){
    this.router.navigate(["addProduct"]);
  }
  deleteProduct(productId:any){
    console.log("hellllo");
    console.log(productId);
    this.productservice.deleteProduct(productId).subscribe(
      resp=>{
        console.log(resp);
        this.getAllProducts();
      },
      error=>{
        console.log(error);
      },
      ()=>{
        console.log("Complete");
      }
    )
  }
  updateProduct(productId:any){
    console.log("norhannnnn");
    console.log(productId);
    this.router.navigate(["updateProduct",productId]);
  }
  productDetails(productId:any){
    this.router.navigate(["getProductById",productId]);
  }
  generateExcelFile(){
    this.productservice.getAllProduct().subscribe(
      data=>{
        console.log(data);
        this.excelService.generateExcel(data);
      }
    )
  }
}
