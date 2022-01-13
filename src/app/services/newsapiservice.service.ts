import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(public http: HttpClient) { }

  //newsapi
  newsApiUrl =  "https://newsapi.org/v2/top-headlines?country=us&apiKey=8e3e28b135424e8f90ebfe815572718d" 

  //technewsapi
  techNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8e3e28b135424e8f90ebfe815572718d"

   //healthnewsapi
   healthNewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=8e3e28b135424e8f90ebfe815572718d"

  topHeading():Observable<any>{
    return this.http.get(this.newsApiUrl)
  }
  techNews():Observable<any>{
    return this.http.get(this.techNewsApiUrl)
  }
  healthNews():Observable<any>{
    return this.http.get(this.healthNewsApiUrl)
  }
}
