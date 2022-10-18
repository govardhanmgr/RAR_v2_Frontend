import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee-details';

@Component({
  selector: 'app-pendingrequest',
  templateUrl: './pendingrequest.component.html',
  styleUrls: ['./pendingrequest.component.css']
})
export class PendingrequestComponent implements OnInit {

  employees = [] as IEmployee[];

  constructor() { }

  ngOnInit(): void {
    this.employees=[
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' }
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' },
      {empFirstName:'sripathi', empLastName:'mamillapalli', empEmail:'sripathisri8@gmail.com', empRole:'software developer',  empEntity:'snad' }
      
      
    ]
    

  }

  

}
