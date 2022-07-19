package com.subham.auction.payloads;


import java.util.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ProductDto {

	private Long Id; 
	
	private String name;
	
	private String discreption;
	
	private Double staringBidAmount;
	
	private Date lastDateOfBiding;
	
	private String category;
	
	private SellerDto seller;
	
}
