import { Injectable } from '@angular/core';
import{HttpClient } from  '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) { }
  
  getTrendingGifs(){
    return this.http.get(environment.giphyApiKeys);
    

}
searchGifs(){
  return this.http.get(environment.searchUrl);
}
}
