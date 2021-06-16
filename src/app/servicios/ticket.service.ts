import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url="http://localhost:8080/ticket/";
  constructor( private http: HttpClient ) { }


  async callMethod( path:any ){
    console.log(this.url)
    return await this.http.get(this.url + path )
  }





}
