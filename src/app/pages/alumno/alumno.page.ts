import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest-service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  alumno: any;
  constructor(public restService: RestService, private router: Router, public nav: NavController) { }

  ngOnInit() {
   this.get();
   console.log(this.alumno);
  }

  get() {
    this.restService.detailAlumno().then(data => {
      this.alumno = data;
      console.log(this.alumno);
      });
  }

  clean() {
    localStorage.setItem("IdAlumno", "");
  }

  verHistorial(id: any){
    localStorage.setItem("IdAlumno", id);
    this.nav.navigateForward(['/historial']);
  }
}
