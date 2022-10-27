import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  ApiUrl = environment.ApiUrl;

  constructor(private http: HttpClient) {}
  getData(url: string) {
    return this.http.get(`${this.ApiUrl}${url}`);
  }
  

  logindata(url: string,data:any){
    return this.http.post(`${this.ApiUrl}${url}`,data);
  }

  
}
  