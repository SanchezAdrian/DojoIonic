import { Component, OnInit } from '@angular/core';
import { ExamenesServiceService } from '../../services/examenes-service.service';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { Examen } from 'src/app/model/examen';
import { empty } from 'rxjs';
import { RestService } from '../../services/rest-service';
import { Alumno } from '../../model/alumno';

@Component({
  selector: 'app-tutor-alumno-examen',
  templateUrl: './tutor-alumno-examen.page.html',
  styleUrls: ['./tutor-alumno-examen.page.scss'],
})
export class TutorAlumnoExamenPage implements OnInit {

  realizado: string[] = [];
  date: string;
  numeros: number[];
  media: number; 
  nuevaNota: number[];
  examenes: any = [];
  examen: any;
  alumno: any;
  partes: any;
  activo = true;

  constructor(private nav: NavController, public data: ExamenesServiceService,  public alertController: AlertController, public restService: RestService) { }

  kyus =['B','BA','A','AN','N','NV','V','VAZ','AZ','AZM','M'];

  ngOnInit() {
    this.obtenerPartesExamen()
    this.obtenerPartes()
    this.alumno =  localStorage.getItem('IdAlumno') ;
  }


  irCategoria(x: any){
    localStorage.setItem('IdCategoria',x);
    setTimeout('', 300);
    this.nav.navigateForward('/tutor-alumno-categoria');
  }

  PartesAFinalizar() {

  }
  aprobar(id: any) {
    localStorage.setItem('IdAlumno',this.alumno);
    this.restService.FinExamen();
  }

  obtenerCategoria(parte: any) {
    for (const x in this.partes) {
      if (this.partes[x].id === parte){
        return this.partes[x].Categoria;
      }
    }
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
        this.examenes.push(this.examen[y])   
      }
    }
    console.log(this.examenes)
    this.examenEmpezado();
    });
    }

  examenEmpezado() {
    setTimeout('',300);
    if(this.examenes.length === 0){
      this.activo = false;
    }
  }
  

  recuentoPartes(cat: any){
    let x = 0;
    for (const y in this.examenes) {
      if (this.examenes[y].Alum === Number(this.alumno) ){
        if( this.obtenerCategoria(this.examenes[y].Part) ===  cat){
           x= x+1;
        }
      }
    }
    return x
  }
  recuentoPartesAcabadas(cat: any) {
    let x = 0;
    for (const y in this.examenes) {
      if (this.examenes[y].Alum === Number(this.alumno) ){
        if( this.obtenerCategoria(this.examenes[y].Part) ===  cat){
          if(this.examenes[y].Finalizada === true){
            x= x+1;
          }
        }
      }
    }
    return x
  }

  recuentoPartesPendientes(cat: any) {
    let x = 0;
    for (const y in this.examenes) {
      if (this.examenes[y].Alum === Number(this.alumno) ){
        if( this.obtenerCategoria(this.examenes[y].Part) ===  cat){
          if(this.examenes[y].Finalizada === false){
            x= x+1;
          }
        }
      }
    }
    return x
  }

  recuentoPartesPendientesTotal() {
    let x = 0;
    for (const y in this.examenes) {
      if (this.examenes[y].Alum === Number(this.alumno) ){
          if(this.examenes[y].Finalizada === false){
            x= x+1;
          }
      }
    }
    return x
  }
  nombreParte(parte: any) {
    for (const x in this.partes) {
      if (this.partes[x].id === parte){
        return this.partes[x].Categoria + this.partes[x].Nombre;
      }
    }
  }



  nombreCategoria(x: any){
    if ( x === 1 ){
      return 'Gonosen';
    }
    if ( x === 2 ){
      return 'GoShin';
    }
    if ( x === 3 ){
      return 'Agarres fundamentales';
    }
    if ( x === 4 ){
      return 'Katas';
    }
    if ( x === 5 ){
      return 'Kihon';
    }
    if ( x === 6 ){
      return 'Teoria';
    }
    if ( x === 7 ){
      return 'Golpes';
    }
    if ( x === 8 ){
      return 'Caidas';
    }
    if ( x === 9 ){
      return 'Guardias';
    }
    if ( x === 10 ){
      return 'Extra';
    }

  }
  calcularMedia() {
    this.media = 0;
    for ( const x of this.realizado ) {
      // tslint:disable-next-line: radix
      this.media = this.media + parseInt(x.split(';')[1]);
      console.log(this.media);
    }
    this.media = this.media / this.realizado.length;
    console.log(this.media);
  }
  actualizar() {
    this.examen.clase = parseInt(this.examen.clase.toString());
    // tslint:disable-next-line: forin
    for (let i = 0; i < this.examen.done.length; i += 1 ) {
      if (this.nuevaNota[i] > 0) {
        this.examen.done[i] = this.examen.done[i].slice(0, -3);
        this.examen.done[i] = this.examen.done[i].concat(';', this.nuevaNota[i].toString());
      } else {
    }
    }
    console.log(this.examen);
    this.data.updateExamen(this.examen);
    this.nav.navigateForward('/home');
  }

  // async ConfirmFinalizar(examen: Examen) {
  //   const alert = await this.alertController.create({
  //     message: 'Examen finalizado?',
  //     buttons: [
  //       {
  //         text: 'No',
  //         role: 'cancelar',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Si',
  //         handler: () => {
  //           this.finalizar();
  //         }
  //       },
  //     ]
  //   });
  //   alert.present();
  // }

  // finalizar() {
  //   this.examen.fechaexamen = this.date;
  //   this.examen.done = [];
  //   for (let k = 0; k < this.kyus.length; k += 1 ) {
  //     if (this.kyus[k] === this.examen.kyu ) {
  //       console.log('entre');
  //       this.examen.kyu = this.kyus[k + 1];
  //       break;
  //     }
  //   }
  //   if (this.examen.registro === undefined ) {
  //     this.examen.registro = [];
  //   }
  //   this.examen.registro.push(this.examen.kyu+'-'+this.media);
  //   this.data.updateExamen(this.examen);
  //   setTimeout(() => this.nav.navigateForward('/home'), 300);
  // }

  // fechaHoy() {
  //   const today = new Date();
  //   const dd = String(today.getDate());
  //   const mm = String(today.getMonth() + 1); // enero es 0
  //   const yyyy = today.getFullYear();
  //   this.date = dd + '/' + mm + '/' + yyyy;
  // }

  // desactivar() {
  //   this.data.askrRemoveExamen(this.examen);
  // }


}
