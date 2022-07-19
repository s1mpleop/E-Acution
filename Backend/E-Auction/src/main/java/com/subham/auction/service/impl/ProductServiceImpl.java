package com.subham.auction.service.impl;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.subham.auction.entity.Product;
import com.subham.auction.entity.Seller;
import com.subham.auction.exception.ResourceNotFoundException;
import com.subham.auction.payloads.ProductDto;
import com.subham.auction.repository.ProductRepo;
import com.subham.auction.repository.SellerRepo;
import com.subham.auction.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepo productRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private SellerRepo sellerRepo;
	
	@Override
	public ProductDto createProduct(ProductDto productDto, Long sellerId) {
		
		Seller seller = this.sellerRepo.findById(sellerId).orElseThrow(() -> new ResourceNotFoundException("Seller", "Seller id", sellerId));
		
		Product product = this.modelMapper.map(productDto, Product.class);
		product.setLastDateOfBiding(new Date());
		product.setSeller(seller);
		Product saveProduct = this.productRepo.save(product);
		return this.modelMapper.map(saveProduct, ProductDto.class);
	}

	@Override
	public void deleteProduct(Long productId) {
		Product product = this.productRepo.findById(productId).orElseThrow(() -> new ResourceNotFoundException("Product", "product id", productId));
		this.productRepo.delete(product);
		
	}

	@Override
	public List<ProductDto> getAllProducts() {
		List<Product> sellers = this.productRepo.findAll();
		List<ProductDto> bidDtos = sellers.stream().map((seller) ->  this.modelMapper.map(seller, ProductDto.class)).collect(Collectors.toList());
		return bidDtos;
		
	}

	@Override
	public ProductDto getProductById(Long productId) {
		Product user=this.productRepo.findById(productId)
				.orElseThrow(()-> new ResourceNotFoundException("product","product id",productId));
		return this.modelMapper.map(user, ProductDto.class);
		
	}


}
