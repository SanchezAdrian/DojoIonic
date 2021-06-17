import { Component, OnInit } from '@angular/core';
import { ExamenesServiceService } from '../../services/examenes-service.service';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { Examen } from 'src/app/model/examen';
import { empty } from 'rxjs';
import { RestService } from '../../services/rest-service';
import { Alumno } from '../../model/alumno';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  examenes: any = [];
  examen: any;
  alumno: any;
  partes: any;
  categoria: any;
  categoriaNombre: any;

  constructor(private nav: NavController, public data: ExamenesServiceService,  public alertController: AlertController, public restService: RestService) { }

  kyus =['B','BA','A','AN','N','NV','V','VAZ','AZ','AM','M'];

  ngOnInit() {
   
    
    this.alumno =  localStorage.getItem('IdAlumno') ;
    this.categoria = localStorage.getItem('IdCategoria') ;
    this.categoriaNombre = this.nombreCategoria(localStorage.getItem('IdCategoria'));
    this.obtenerPartes()
    this.obtenerPartesExamen()
    console.log(this.alumno);
    console.log(this.categoria);
  }

  PartesAFinalizar() {

  } 

  obtenerPartes() {
    this.restService.getParte()
    .then(data => {
      this.partes = data;
      });
  }

  obtenerPartesExamen() {
    this.restService.getParteExamen()
    .then(data => {
    this.examen = data;
    for (const y in this.examen) {
      if (this.examen[y].Alum === Number(this.alumno) ){
        if (this.obtenerCategoria(this.examen[y].Part)==this.categoria ){
        this.examenes.push(this.examen[y])   
        }
      }
    }
    console.log(this.examenes);
    });
    
   
    }
  

    obtenerCategoria(parte: any) {
      for (const x in this.partes) {
        if (this.partes[x].id === parte){
          return this.partes[x].Categoria;
        }
      }
    }

  nombreParte(parte: any) {
    for (const x in this.partes) {
      if (this.partes[x].id === parte){
        return this.partes[x].Nombre;
      }
    }
  }

  nombreCategoria(x: any){
      if ( x === '1' ){
        return 'Gonosen';
      }
      if ( x === '2' ){
        return 'GoShin';
      }
      if ( x === '3' ){
        return 'Agarres fundamentales';
      }
      if ( x === '4' ){
        return 'Katas';
      }
      if ( x === '5' ){
        return 'Kihon';
      }
      if ( x === '6' ){
        return 'Teoria';
      }
      if ( x === '7' ){
        return 'Golpes';
      }
      if ( x === '8' ){
        return 'Caidas';
      }
      if ( x === '9' ){
        return 'Guardias';
      }
      if ( x === '10' ){
        return 'Extra';
      }
  
    }

    sumar(parte: any) {
      parte.Realizadas=parte.Realizadas+1;
    }

    restar(parte: any) {
      parte.Realizadas=parte.Realizadas-1;
    }

    info(parte: any){
      this.InforParte(parte);
    }

    info2(parte: any){
      this.InforParte2(parte);
    }

    async InforParte(parte: any) {
      const alert = await this.alertController.create({
        message: parte.Info,
        inputs: [
          {
            name: 'texto',
            type: 'text',
            placeholder: 'Detalles'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancelar',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Correcto',
            handler: data => {
              console.log(data);
              parte.Info= parte.Info+" "+data.texto;
              console.log(parte);
              setTimeout(() => '', 300);
              this.restService.updateParteExamen(parte);
            }
          },
        ]
      });
      alert.present();
    } 

    async InforParte2(parte: any) {
      const alert = await this.alertController.create({
        message: parte.Info,
        buttons: [
          {
            text: 'Ok',
            role: 'cancelar',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
        ]
      });
      alert.present();
    } 

    realizar(examenes: any[]){
      for(const x in examenes){
        console.log(examenes[x])
        this.restService.updateParteExamen(examenes[x]);
      }
    }
    async realizarParte(examenes: any[]) {
      const alert = await this.alertController.create({
        message: 'Actualziar partes?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancelar',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Actualizar',
            handler: () => {
              this.realizar(examenes);
              setTimeout(() => '', 300);
              this.nav.navigateForward('/examen');
            }
          },
        ]
      });
      alert.present();
    }
    acabarParte(parte: any){
      parte.Finalizada = true;
      console.log(parte);
    } 
    async finParte(parte: any) {
      const alert = await this.alertController.create({
        message: 'Actualziar partes?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancelar',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Finalizar parte',
            handler: () => {
              this.acabarParte(parte);
              this.restService.updateParteExamen(parte);
              this.checkFin()
              // setTimeout(() => '', 300);
              // this.nav.navigateForward('/examen');
            }
          },
        ] 
      });
      alert.present();
    }
    checkFin() {
      const part = this.recuentoPartesPendientesTotal();
      if (part == 0) {
        localStorage.setItem('IdAlumno',this.alumno);
        this.restService.FinExamen();
      }
    }
    recuentoPartesPendientesTotal() {
      let x = 0;
      for (const y in this.examen) {
        if (this.examen[y].Alum === Number(this.alumno) ){
            if(this.examen[y].Finalizada === false){
              x= x+1;
            }
        }
      }
      return x
    }
}
