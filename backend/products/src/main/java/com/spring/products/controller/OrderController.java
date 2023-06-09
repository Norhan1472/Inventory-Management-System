package com.spring.products.controller;

import com.spring.products.entity.Orders;
import com.spring.products.entity.Product;
import com.spring.products.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/order/v1")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class OrderController {
    private final OrderService orderService;
    @PostMapping("addOrder")
    public ResponseEntity<Orders>addOrder(@RequestBody Orders order){
        return ResponseEntity.ok(orderService.addOrder(order));
    }
    @PutMapping("updateOrder/{orderId}")
    public ResponseEntity<Orders>updateOrder(@PathVariable long orderId,@RequestBody Orders order){
        return ResponseEntity.ok(orderService.updateOrder(orderId,order));
    }
    @GetMapping("getOrderById/{orderId}")
    public ResponseEntity<Orders>getOrderById(@PathVariable long orderId){
        return ResponseEntity.ok(orderService.getOrderById(orderId));
    }
    @GetMapping("getAllOrders")
    public ResponseEntity<List<Orders>>getAllOrders(){
        return ResponseEntity.ok(orderService.getAllOrders());
    }
    @DeleteMapping("deleteOrderById/{orderId}/reason/{reasonReturn}")
    public ResponseEntity<Boolean>deleteOrderById(@PathVariable long orderId,@PathVariable String reasonReturn){
        return ResponseEntity.ok(orderService.deleteOrderById(orderId,reasonReturn));
    }
    @PutMapping("assignOrderWithProduct/{orderId}/product/{productId}")
    public ResponseEntity<Orders>assignOrderWithProduct(@PathVariable long orderId,@PathVariable long productId){
        return ResponseEntity.ok(orderService.assignOrderWithProduct(orderId,productId));
    }
    @GetMapping("getAllProductsOfOrder/{orderId}")
    public ResponseEntity<List<Product>>getAllProductsOfOrder(@PathVariable long orderId){
        return ResponseEntity.ok(orderService.getAllProductsOfOrder(orderId));
    }

}
