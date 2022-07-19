package com.subham.auction.payloads;


import java.util.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class BidsDto {
	
	private Long id;

	private Long bidAmount;
	
	private Date biddingDate;
	
	private ProductDto product;
	
	private BuyerDto buyer;
	
}
