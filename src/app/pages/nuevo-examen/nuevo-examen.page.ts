import { Component, OnInit } from '@angular/core';
import { ExamenesServiceService } from '../../services/examenes-service.service';
import { NavController } from '@ionic/angular';
import { Examen } from 'src/app/model/examen';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-examen',
  templateUrl: './nuevo-examen.page.html',
  styleUrls: ['./nuevo-examen.page.scss'],
})
export class NuevoExamenPage implements OnInit {



  constructor(private data: ExamenesServiceService, private nav: NavController, private router: Router) { }

  examen: Examen = {
    nombre: '',
    apellido: '',
    kyu: '',
    clase: 0,
    fechaexamen: '',
    fechaparte: '',
    done: [],
    check: false,
    nota: 90,
    id: 1,
    activo: true,
    registro: [],
  };

  ngOnInit() {
    this.data.cargarExamenes();
    console.log(this.data.examenes);
    for (const e of this.data.examenes ) {
        this.examen.id += 1;
      }
    console.log(this.examen.id);
  }

  crear() {
    // tslint:disable-next-line: radix
    this.examen.clase = parseInt(this.examen.clase.toString());
    this.data.guardarExamen(this.examen);
    this.data.cargarExamenes();
    this.nav.navigateForward('/home');
  }

}
