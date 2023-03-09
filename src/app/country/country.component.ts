import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class countryComponent implements OnInit {

  countries:any;

  constructor( private http: HttpClient) {}

  ngOnInit() {
    let response =this.http.get("http://localhost:8080/getallcountries");
    response.subscribe((data)=>this.countries=data);

    
  }


}
