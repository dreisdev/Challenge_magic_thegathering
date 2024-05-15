import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api.magicthegathering.io/v1';

  constructor(private http: HttpClient) { }

  getSets(name:string, block:string): Observable<any> {
    let params: { [key: string]: string } = {};
    if(name){
      params['name'] = name;
    }
    if(block){
      params['block'] = block;
    }
    console.log('Params for API call:', params);
    return this.http.get(`${this.baseUrl}/sets`, {params});
  }

 
}
