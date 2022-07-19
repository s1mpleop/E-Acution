package com.subham.auction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subham.auction.entity.Buyer;

public interface BuyerRepo extends JpaRepository<Buyer, Long> {

}
