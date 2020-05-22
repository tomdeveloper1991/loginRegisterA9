import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  invalidLogin:boolean=false;
  message:any;

  constructor(private formBuilder:FormBuilder, 
              private apiService:ServicesService,
              private router:Router) { }

  ngOnInit() {
    window.sessionStorage.clear();    

    this.loginForm = this.formBuilder.group({      
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }

    const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value,
    };

    this.apiService.login(loginData).subscribe((data:any)=>{      
      console.log(data.token);
      if (data.token) {
        window.sessionStorage.setItem('usuario',data.usuario);
        window.sessionStorage.setItem('token',data.token);
        this.message="Login successful";
        this.router.navigate(['view']);
      }else{
        this.invalidLogin = true;        
        window.sessionStorage.clear();
        this.message=null;
      }
    });
  }
}
