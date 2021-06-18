import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url="http://localhost:8080/ticket/";
  constructor( private http: HttpClient ) { }


  async callMethod( path:any , param?:HttpParams ){

    if(param){    
      return await this.http.get(this.url + path , {params:param} )
    }
    return await this.http.get(this.url + path )
  }

  async callMethodWithParams( path:any , params: any[]){
    console.log(this.url)
    let headers = new HttpHeaders();
    let parametros = new HttpParams();
    
    return await this.http.get(this.url + path , { headers: headers, params: parametros } )
  }




}
