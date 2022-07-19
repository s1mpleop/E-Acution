package com.subham.auction.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name="seller")
@NoArgsConstructor
@Getter
@Setter
public class Seller {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	private String email;
	private String address;
	private Long phoneNumber; 
	
	@OneToMany(mappedBy = "seller", cascade = CascadeType.ALL)
	private List<Product> products = new ArrayList<>();
	
}
