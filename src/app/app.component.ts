import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Alumno } from './models/alumno';
import { AlumnoService } from './services/alumno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  arregloAlumnos?:Alumno;



  constructor (public alumnoService:AlumnoService){
    
  }

  ngOnInit(): void{ }

  getAlumn(_uid:string){
    debugger;
    this.alumnoService.getAlumnos(_uid).subscribe(
      (res)=>{
      this.arregloAlumnos=res['msg'];
        //this.arregloAlumnos.push(res['msg']);
      console.log(res['msg']);
      })  
  }

    
    
  addAlumn(form:NgForm){
  this.alumnoService.createAlumnos(form.value).subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agrego al empleado con exito',
            showConfirmButton: false,
            timer: 1500
          });
          //this.getAlumn();
          form.reset();
          
        },
        err => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Hubo algun error al agregar al empleado',
            showConfirmButton: false,
            timer: 1500
          });
          console.log(err);
          
        }
      )
      }
    }