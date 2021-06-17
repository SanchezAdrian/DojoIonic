import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest-service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tutor-alumno',
  templateUrl: './tutor-alumno.page.html',
  styleUrls: ['./tutor-alumno.page.scss'],
})
export class TutorAlumnoPage implements OnInit {

  alumno: any;
  constructor(public restService: RestService, private router: Router,  private menu: MenuController) { }

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

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  verHistorial(id: any){
    localStorage.setItem("IdAlumno", id);
    this.router.navigate(['/historial']);
  }
}
 