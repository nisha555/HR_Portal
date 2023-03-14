import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class countryComponent implements OnInit {

  countries:any;
  response:any;
  constructor(private http: HttpClient) {}
 
  ngOnInit() {
    let response =this.http.get("http://localhost:8080/getallcountries");
    response.subscribe((data)=>this.countries=data);
  }
  searchText ='';

  deleteCountry(country_id: string){
    this.http.delete("http://localhost:8080/deleteCountry/"+country_id).subscribe();
    alert('delete country successfully !! ');
    }

    
  }
  

  

