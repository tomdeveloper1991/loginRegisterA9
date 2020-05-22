import { Component, OnInit } from '@angular/core';

import { ServicesService } from './../../services/services.service';
import { LoginServiceService } from './../../services/login-service.service';

import { Router } from '@angular/router';

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  users: any;

  constructor(
        private apiService:ServicesService,
        private loginService:LoginServiceService,
        private router : Router
    ) { }

  ngOnInit() {
    this.loginService.controlSesion();

    this.getUsers();
  }


  getUsers() {
    this.apiService.getUsers().
    subscribe( data => {      
      this.users = data;
      console.log(this.users);
    });
  }

  deleteUser(user:User){
    //console.log(user.id);

    this.apiService.deleteUser(user.id).
    subscribe( data => {            
      //console.log(data);
      this.getUsers();
    });
  }

  editUser(user:User){
    //console.log(user.id);
    this.router.navigate(['edit/'+user.id]);    
  }

}