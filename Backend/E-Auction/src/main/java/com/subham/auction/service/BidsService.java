package com.subham.auction.service;

import java.util.List;

import com.subham.auction.payloads.BidsDto;

public interface BidsService {

	//create bids
	BidsDto createBids (BidsDto bidsDto, Long buyerId, Long productId);
	
	//update bids
	BidsDto updateBids (BidsDto bidsDto, Long bidId);
	
	//delete bid
	void deleteBid(Long bidId);
	
	//get all bids
	List<BidsDto> getAllBids();
	
	//get all bids by buyers
	List<BidsDto> getBidsByBuyer(Long buyerId);
	
	//get all bids by product
	List<BidsDto> getBidsByProduct(Long productId);
}
