import { Component, OnInit } from '@angular/core';

import { NavController, AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/app/model/examen';
import { MenuController } from '@ionic/angular';
import { RestService } from '../../services/rest-service';
import { Alumno } from 'src/app/model/alumno';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-selector-maestro',
  templateUrl: './selector-maestro.page.html',
  styleUrls: ['./selector-maestro.page.scss'],
})
export class SelectorMaestroPage implements OnInit {

  alumnos: any;
  checked: boolean;
  numeros: number[];
  tutor:any;
  clase:any;
  constructor(private nav: NavController, private modal: ModalController,
    private menu: MenuController, private restService: RestService, private router: Router, public alertController: AlertController,public loadingController: LoadingController ) {
    }


ngOnInit(): void {
this.clase = localStorage.getItem('ClaseActual')
this.obtenerAlumnos();
console.log(this.alumnos);
this.tutor=localStorage.getItem('IdTutor');
}

ionViewWillEnter() {
  this.clase = localStorage.getItem('ClaseActual')
  this.obtenerAlumnos();
  console.log(this.alumnos);
  this.tutor=localStorage.getItem('IdTutor');
}

async presentLoading() {
  const loading = await this.loadingController.create({
    duration: 800
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
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

async presentReact(id: string) {
  const alert = await this.alertController.create({
    message: 'Empezar examen?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancelar',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Empezar examen',
        handler: () => {
          this.asignar(id);
          setTimeout(() => {
          this.obtenerAlumnos();
           }, 500);
          this.presentLoading();
          console.log(this.alumnos);
          this.nav.navigateForward['/maestro-sin-examen'];
        }
      },
    ]
  });
  alert.present();
}

async asignar(id: string) { //empieza un examen para el alumno asignando sus partes
  localStorage.setItem('IdAlumno',id);
  this.restService.NuevoExamen();
  // setTimeout(() => {
  //   this.obtenerAlumnos();
  //  }, 2500);
  
}


}

 