package com.subham.auction.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="buyer")
@NoArgsConstructor
@Getter
@Setter
public class Buyer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private String email;
	
	private Long phoneNumber;
	
	private String address;
	
	@OneToMany(mappedBy = "buyer", cascade = CascadeType.ALL)
	private List<Bids> bids = new ArrayList<>();
}
