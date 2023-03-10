import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthDoctorUserService } from '../authDoctorUser.service';
@Component({
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent{

  constructor(public authDoctorUserService : AuthDoctorUserService){}

  onDoctorLogin(form:NgForm){
    if(form.invalid){
      return;
    }
    this.authDoctorUserService.login(form.value.email,form.value.password);
  }

}