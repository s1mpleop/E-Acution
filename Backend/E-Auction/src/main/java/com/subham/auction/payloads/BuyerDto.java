package com.subham.auction.payloads;

import lombok.*;

@NoArgsConstructor
@Getter
@Setter
public class BuyerDto {
	
	private Long id;

	private String name;
	
	private String email;
	
	private Long phoneNumber;
	
	private String address;
	
}
