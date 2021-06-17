import { Component, OnInit } from '@angular/core';
import { ExamenesServiceService } from '../../services/examenes-service.service';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/app/model/examen';
import { MenuController } from '@ionic/angular';
import { RestService } from '../../services/rest-service';
import { Alumno } from 'src/app/model/alumno';



@Component({
  selector: 'app-maestro-examenes-activos',
  templateUrl: './maestro-examenes-activos.page.html',
  styleUrls: ['./maestro-examenes-activos.page.scss'],
})
export class MaestroExamenesActivosPage implements OnInit {
  alumnos: any;
  checked: boolean;
  numeros: number[];
  tutor:any;
  clase:any;
  constructor(public data: ExamenesServiceService, private nav: NavController, private modal: ModalController,
              private menu: MenuController, private restService: RestService, private router: Router ) {
              }


  ngOnInit(): void {
    this.clase = localStorage.getItem('ClaseActual')
    this.obtenerAlumnos();
    console.log(this.alumnos);
    this.tutor=localStorage.getItem('IdTutor');
  }

  


  obtenerAlumnos() {
    this.restService.getAlumnos()
    .then(data => {
    this.alumnos = data;
    console.log(data);
    console.log(this.alumnos);
    });
    console.log(this.alumnos);
    }

  getUrl(kyu: string) {
      return '\\assets\\kyus\\'+kyu+'.jpg';
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  doRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      this.data.cargarExamenes();
      event.target.complete();
    }, 1500);
  }

  ionViewWillEnter() {
    this.data.cargarExamenes();
}

  datos() {
    console.log(this.alumnos);
  }

  buscar(id: string) {
    localStorage.setItem("IdAlumno", id);
    setTimeout('', 1500);
    this.router.navigate(['/alumno']);
  }

  irExamen(id: string) {
    localStorage.setItem("IdAlumno", id);
    setTimeout('', 1500);
    this.router.navigate(['/examen']);
  
  }

}
