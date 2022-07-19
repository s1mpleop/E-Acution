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
import com.subham.auction.payloads.BuyerDto;
import com.subham.auction.service.BuyerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/buyer")
public class BuyerController {

	@Autowired
	private BuyerService buyerService;
	
	@PostMapping("/addBuyer/")
	public ResponseEntity<BuyerDto> createBuyer(@RequestBody BuyerDto buyerDto){
		
		BuyerDto createBuyer = this.buyerService.createBuyer(buyerDto);
		
		return new ResponseEntity<>(createBuyer, HttpStatus.CREATED);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<BuyerDto>> getAllBuyers(){
		List<BuyerDto> bids = this.buyerService.getAllBuyer();
		return new ResponseEntity<>(bids, HttpStatus.OK);
	}
	
	
	@DeleteMapping("/{buyerId}")
	public ApiResponse deletePost(@PathVariable Long buyerId) {
		this.buyerService.deleteBuyer(buyerId);
		return new ApiResponse("Buyer is succssfully deleted !!", "TRUE");
	}
	
	@GetMapping("/{buyerId}")
	public ResponseEntity<BuyerDto> getSingleBuyer(@PathVariable Long buyerId){
		return ResponseEntity.ok(this.buyerService.getBuyerById(buyerId));
	}
	
	@PutMapping("/{buyerId}")
	public ResponseEntity<BuyerDto> updateUser(@RequestBody BuyerDto sellerDto, @PathVariable Long buyerId){
		BuyerDto updatedUser = this.buyerService.updateBuyer(sellerDto, buyerId);
		return ResponseEntity.ok(updatedUser);
	}
	
	
}
