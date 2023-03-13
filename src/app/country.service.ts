import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  

  constructor(private http: HttpClient) { }

  public addUser(user:any){
    return this.http.post(`${baseUrl}`,user);

  }
  deleteCountry(countryId:string){
    return this.http.delete('http://localhost:8080/delete/'+countryId);
  }
}
