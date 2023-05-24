package com.spring.products.service.implementation;

import com.spring.products.entity.History;
import com.spring.products.entity.Orders;
import com.spring.products.entity.Product;
import com.spring.products.enumeration.Status;
import com.spring.products.exception.OrderNotFoundException;
import com.spring.products.repository.OrderRepo;
import com.spring.products.service.HistoryService;
import com.spring.products.service.OrderService;
import com.spring.products.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.utility.dispatcher.JavaDispatcher;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.*;

import static com.spring.products.enumeration.Status.ACTIVE;
import static com.spring.products.enumeration.Status.NOT_ACTIVE;
import static java.lang.Boolean.TRUE;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class OrderServiceImpl implements OrderService {
    private final OrderRepo orderRepo;
    private final ProductService productService;
    private final HistoryService historyService;

    @Override
    public Orders addOrder(Orders order) {

        for(int i=0;i<order.getProducts().size();i++){
            Product product= productService.getProductById(order.getProducts().get(i).getProductId());
            product.setStatus(NOT_ACTIVE);
            productService.updateProduct(order.getProducts().get(i).getProductId(),product);
            //add history
            History history= new History();
            history.setEmpName(order.getEmpName());
            Calendar cal = Calendar.getInstance();
            history.setDateReceived(new Timestamp(cal.getTime().getTime()));
            history.setProductName(product.getProductName());
            history.setBrand(product.getBrand().getBrandName());
            System.out.println("here");
            System.out.println(product.getSpecification());
            history.setProductDesc(product.getSpecification());
            //history.setProductDesc(product.getSpecification());
            history.setSerialNumber(product.getSerialNumber());
            historyService.addOrderHistory(history);
        }

        return orderRepo.save(order);

    }

    @Override
    public Orders updateOrder(long orderId, Orders order) {
        Orders checkExist = getOrderById(orderId);
        for(Product p:checkExist.getProducts()){
            Product product= productService.getProductById(p.getProductId());
            product.setStatus(ACTIVE);
            productService.updateProduct(p.getProductId(),product);
        }
        checkExist.setEmpName(order.getEmpName());
        checkExist.setNationalId(order.getNationalId());
        checkExist.setEmail(order.getEmail());
        checkExist.setDescription(order.getDescription());
        checkExist.setProducts(order.getProducts());
        Orders orderss = addOrder(checkExist);
        return orderss;
    }

    @Override
    public List<Orders> getAllOrders() {
        return orderRepo.findAll();
    }

    @Override
    public Orders getOrderById(long orderId) {
        return orderRepo.findById(orderId).orElseThrow(()->new OrderNotFoundException("Order isn't exist with this id "+orderId));
    }

    @Override
    public Boolean deleteOrderById(long orderId,String reasonReturn) {
        Orders order = getOrderById(orderId);

        List<Product>products=new ArrayList<>();
        products = order.getProducts();
        for( Product p : products){
            p.setStatus(ACTIVE);
            History history = new History();
            history.setEmpName(order.getEmpName());
            Calendar cal = Calendar.getInstance();
            history.setDateRetrieved(new Timestamp(cal.getTime().getTime()));
            history.setReason(reasonReturn);
            history.setProductName(p.getProductName());
            history.setProductDesc(p.getSpecification());
            history.setBrand(p.getBrand().getBrandName());
            history.setSerialNumber(p.getSerialNumber());
            historyService.addOrderHistory(history);
        }
        List<Product>productss=new ArrayList<>();
        order.setProducts(productss);

        orderRepo.deleteById(orderId);

        return TRUE;
    }

    @Override
    public Orders assignOrderWithProduct(long orderId, long productId) {
        List<Product>products=new ArrayList<>();
        Product productExist = productService.getProductById(productId);
       // productExist.setStatus(NOT_ACTIVE);
        products.add(productExist);
        Orders checkExistOrders = getOrderById(orderId);
        checkExistOrders.setProducts(products);
        return addOrder(checkExistOrders);
    }
    @Override
    public List<Product> getAllProductsOfOrder(long orderId) {
        Orders order = getOrderById(orderId);
        return order.getProducts();
    }
}
