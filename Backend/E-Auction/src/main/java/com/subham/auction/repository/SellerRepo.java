package com.subham.auction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subham.auction.entity.Seller;

public interface SellerRepo extends JpaRepository<Seller, Long>{

}
