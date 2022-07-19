package com.subham.auction.entity;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="bids")
@NoArgsConstructor
@Getter
@Setter
public class Bids {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long bidId;
	
	private Long bidAmount;
	
	private Date biddingDate;
	
	@ManyToOne
	private Product product;
	
	@ManyToOne
	private Buyer buyer;
	
	
}
