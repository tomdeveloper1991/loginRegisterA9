import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from './../Model/user';
import { ApiResponse } from './../Model/api-response';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient,
              private router:Router) { }

  private baseURL = 'http://localhost/apiRestSlim/public';
  private token:any;

  login(loginData:any){
    let json = JSON.stringify(loginData);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');    
    return this.http.post<ApiResponse>(this.baseURL+'/login',params,{headers});
  }


  controlSesion(){
    const loginData = {
      username: window.sessionStorage.getItem('usuario'),
      token: window.sessionStorage.getItem('token')
    };

    this.validarSesion(loginData)
    .subscribe(data => {            
      if(!data.continua_sesion){
        this.router.navigate(['login']);
      }
    });
  }

  validarSesion(loginData:any){        
    let json = JSON.stringify(loginData);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<ApiResponse>(this.baseURL+'/valida_tiempo_login',params,{headers});
  }  
}
