package com.subham.auction.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.subham.auction.payloads.ApiResponse;
import com.subham.auction.payloads.ProductDto;
import com.subham.auction.service.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	
	//create
	@PostMapping("/seller/{sellerId}/products")
	public ResponseEntity<ProductDto> createProduct(
			@RequestBody ProductDto productDto,
			@PathVariable Long sellerId
			){
		ProductDto createProductDto = this.productService.createProduct(productDto, sellerId);
		return new ResponseEntity<>(createProductDto, HttpStatus.CREATED);
	}
	
	@GetMapping("/products")
	public ResponseEntity<List<ProductDto>> getAllProducts(){
		List<ProductDto> bids = this.productService.getAllProducts();
		return new ResponseEntity<>(bids, HttpStatus.OK);
	}
	
	@GetMapping("/product/{productId}")
	public ResponseEntity<ProductDto>getSingleUser(@PathVariable Long sellerId){
		return ResponseEntity.ok(this.productService.getProductById(sellerId));
	}
	
	//Delete
	@DeleteMapping("/product/{productId}")
	public ApiResponse DeleteProduct(@PathVariable Long productId) {
		this.productService.deleteProduct(productId);
		return new ApiResponse("Post is successfully deleted", "TRUE");
	}

	
}
