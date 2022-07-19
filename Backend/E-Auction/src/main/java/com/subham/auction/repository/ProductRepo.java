package com.subham.auction.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subham.auction.entity.Product;
import com.subham.auction.entity.Seller;

public interface ProductRepo extends JpaRepository<Product, Long> {

	List<Product> findBySeller (Seller seller);
	
}
