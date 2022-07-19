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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.subham.auction.payloads.ApiResponse;
import com.subham.auction.payloads.BidsDto;
import com.subham.auction.service.BidsService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class BidsController {

	@Autowired
	private BidsService bidsService;
	//create
	@PostMapping("/buyer/{buyerId}/product/{productId}/bids")
	public ResponseEntity<BidsDto> createBid(@RequestBody BidsDto bidsDto,
			@PathVariable Long buyerId,
			@PathVariable Long productId
			){
		BidsDto createdBid = this.bidsService.createBids(bidsDto, buyerId, productId);
		return new ResponseEntity<>(createdBid, HttpStatus.CREATED);
	}
	
	//get bids by buyer
	@GetMapping("/buyer/{buyerId}/bids")
	public ResponseEntity<List<BidsDto>> getBidsByBuyer(@PathVariable Long buyerId){
		List<BidsDto> bids = this.bidsService.getBidsByBuyer(buyerId);
		return new ResponseEntity<>(bids, HttpStatus.OK);
	}
	
	//get bids by product 
		@GetMapping("/product/{productId}/bids")
		public ResponseEntity<List<BidsDto>> getBidsByProduct(@PathVariable Long productId){
			List<BidsDto> bids = this.bidsService.getBidsByProduct(productId);
			return new ResponseEntity<>(bids, HttpStatus.OK);
		}
		
	//get All bids
	@GetMapping("/bids")
	public ResponseEntity<List<BidsDto>> getAllBids(){
		List<BidsDto> bids = this.bidsService.getAllBids();
		return new ResponseEntity<>(bids, HttpStatus.OK);
	}
	
	//delete bid
	@DeleteMapping("/bids/{bidId}")
	public ApiResponse deletePost(@PathVariable Long bidId) {
		this.bidsService.deleteBid(bidId);
		return new ApiResponse("Bid is succssfully deleted !!", "TRUE");
	}
	
	//update a bid
	@PutMapping("/bids/{bidId}")
	public ResponseEntity<BidsDto> updateBids(@RequestBody BidsDto bidsDto, @PathVariable Long bidId){
		BidsDto updateBid = this.bidsService.updateBids(bidsDto, bidId);
		return new ResponseEntity<>(updateBid, HttpStatus.OK);
	}
	
}
