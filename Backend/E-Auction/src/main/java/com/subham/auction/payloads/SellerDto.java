package com.subham.auction.payloads;

import lombok.*;

@NoArgsConstructor
@Getter
@Setter
public class SellerDto {

	private String id;
	private String name;
	private String email;
	private String address;
	private Long phoneNumber;
	
	
}
