package com.subham.auction.service;

import java.util.List;

import com.subham.auction.payloads.SellerDto;


public interface SellerService {

	SellerDto createSeller(SellerDto seller);
	
	List<SellerDto> getAllSeller();
	
	SellerDto getSellerById(Long sellerId);
	
	void deleteUser(Long sellerID);
	
	SellerDto updateUser(SellerDto seller, Long sellerId);
	
	

	
}
