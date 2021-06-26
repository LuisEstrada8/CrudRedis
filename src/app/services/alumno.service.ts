import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

 URL_API='http://localhost:3000';

  alumno!:Alumno[];

  selectedAlum:Alumno = {
    id_user: '',
    name: '',
    uid: '',
    age: '',
    birthday: '',
    genre: '',
    speciality: '',
    school: '',
    city_born: '',
    
  };
  constructor( private http:HttpClient ) { }


  getAlumnos(_uid: string) {
    debugger;
   return this.http.get<any>(`${this.URL_API}/get-student/${_uid}`);
  }

  createAlumnos(alumno:Alumno){
    return this.http.post<Alumno[]>(`${this.URL_API}/new-student`, alumno);
  }
}

