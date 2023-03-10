import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-country',
  templateUrl: './save-country.component.html',
  styleUrls: ['./save-country.component.css']
})
export class SaveCountryComponent implements OnInit {

  constructor(){}

  public user = {
    country_short_name :'',
    country_name : '',
  };

  ngOnInit(): void {}
  formSubmit()
  {
          alert('submit');
  }

}
