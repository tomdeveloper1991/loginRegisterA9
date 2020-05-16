import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiResponse } from 'src/app/Model/api-response';
import { ServicesService } from './../../services/services.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder, 
    private apiService:ServicesService,
    private router:Router,
    private routes:ActivatedRoute,
  ) { }

  addForm: FormGroup;  

  ngOnInit() {

    const routeParams = this.routes.snapshot.params;

    console.log(routeParams.id);

    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });

    this.apiService.getUserById(routeParams.id).
    subscribe((data:any)=>{
      console.log(data[0]);
      this.addForm.patchValue(data[0]);
    });
  }

  onSubmit(){
    console.log(this.addForm.value);

    this.apiService.editUser(this.addForm.value)
    .subscribe(data => {
      this.router.navigate(['view']);
    });
  }


}
