import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-save-country',
  templateUrl: './save-country.component.html',
  styleUrls: ['./save-country.component.css']
})
export class SaveCountryComponent implements OnInit {

  constructor(private countryService:CountryService){}

  public user = {
    country_short_name :'',
    country_name : '',
  };

  ngOnInit(): void {}
  formSubmit()
  {
          console.log(this.user);
          if(this.user.country_short_name==''||this.user.country_short_name==null){
            alert('country is required !! ');
            return;
          }

          this.countryService.addUser(this.user).subscribe(
            (data)=>{
              console.log(data);
              alert('success');

            },
            (error)=>{
              console.log(error);
              alert('something went wrong');

            }
            )
          
  }

}
