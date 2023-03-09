package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controller.services.CountryService;
import com.example.demo.entities.Country;

@CrossOrigin("http://localhost:50777")
@RestController
public class CountryController {
	
	@Autowired
	private CountryService countryService;
	
	@PostMapping("/api/country")
	public void saveCountry(@RequestBody Country country) {
		
		countryService.createUser(country);
		
	}
	
	@GetMapping("/aa/{id}")
	public Country getCountry(@PathVariable("id") long id){
		Country country= countryService.getOneCountry(id);
		return country;
				
	}
	
	
	@GetMapping("/getallcountries")
	public List<Country>getAllCountry(){
		List<Country> country=countryService.getAllData();
		return country;
	}
	
	
	
	
	

}
