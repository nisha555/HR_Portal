package com.example.demo.entities;



import jakarta.persistence.Entity;

import jakarta.persistence.Id;


@Entity
public class Country {
	
	@Id
	private long country_id;
	
	
	private String country_short_name;
	
	
	private String country_name;


	public long getCountry_id() {
		return country_id;
	}


	public void setCountry_id(long country_id) {
		this.country_id = country_id;
	}


	public String getCountry_short_name() {
		return country_short_name;
	}


	public void setCountry_short_name(String country_short_name) {
		this.country_short_name = country_short_name;
	}


	public String getCountry_name() {
		return country_name;
	}


	public void setCountry_name(String country_name) {
		this.country_name = country_name;
	}
}
	
	


	