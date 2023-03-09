package com.example.demo.controller.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Country;
import com.example.demo.repositories.CountryRepo;

@Service
public class CountryService {
	
	@Autowired
	private CountryRepo countryRepo;
	
	
	public void createUser(Country country) {
		
		countryRepo.save(country);
		
		
	}
	
	public Country getOneCountry(long id) {
		Optional<Country> findById = countryRepo.findById(id);
		return findById.get();
	}
	
	public List<Country> getAllData(){
		List<Country> country = countryRepo.findAll();
		return country;
		
	}

	
	

		

}
