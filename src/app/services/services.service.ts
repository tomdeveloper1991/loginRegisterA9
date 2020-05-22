import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './../Model/user';
import { ApiResponse } from './../Model/api-response';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost/apiRestSlim/public';

  login(loginData:any){
    let json = JSON.stringify(loginData);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');    
    return this.http.post<ApiResponse>(this.baseURL+'/login',params,{headers});
  }

  getUserById(id:number): Observable<ApiResponse>{   
    let headers = new HttpHeaders().set('Content-Type','text/html; charset=UTF-8');
    return this.http.get<ApiResponse>(this.baseURL+'/register/listById/'+id,{headers});
  }

  getUsers(): Observable<ApiResponse>{
    let headers = new HttpHeaders().set('Content-Type','text/html; charset=UTF-8');
    return this.http.get<ApiResponse>(this.baseURL+'/register/listAll',{headers});
  }
  
  
  createUser(user:User): Observable<ApiResponse>{
    let json = JSON.stringify(user);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');    

    return this.http.post<ApiResponse>(this.baseURL+'/register/insert',params,{headers});
  }

  deleteUser(id:any): Observable<ApiResponse>{    
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');    
    
    return this.http.delete<ApiResponse>(this.baseURL+'/register/delete/'+id,{headers});
  }
  
  editUser(user:User): Observable<ApiResponse>{
    let json = JSON.stringify(user);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');    

    return this.http.put<ApiResponse>(this.baseURL+'/register/update',params,{headers});
  }  
}