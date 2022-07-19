package com.subham.auction.service;

import java.util.List;

import com.subham.auction.payloads.BuyerDto;


public interface BuyerService {

	//creating a buyer
	BuyerDto createBuyer(BuyerDto buyerDto);
	
	List<BuyerDto> getAllBuyer();
	
	BuyerDto getBuyerById(Long buyerId);
	
	void deleteBuyer(Long buyerID);
	
	BuyerDto updateBuyer(BuyerDto buyer, Long buyerId);
	
}
