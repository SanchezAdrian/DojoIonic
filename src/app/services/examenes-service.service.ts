import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Examen } from 'src/app/model/examen';
import { AlertController } from '@ionic/angular';
import { NavController, ModalController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ExamenesServiceService {

  date: string;
  examenes: Examen[] = [];
  ex: Examen;
  clase: number;


  constructor(private storage: Storage, public alertController: AlertController, private nav: NavController) {
    this.cargarExamenes();
    this.clase = 0;
  }

  async cargarExamenes() {
    const tarjeta = await this.storage.get('tarjeta');
    if (tarjeta) {
      this.examenes = tarjeta;
    }
   }
   async cargarExamenesCla(n: number) {
    this.clase = n;
   }


  updateExamen(examen: Examen) {
    for ( const e of this.examenes) {
      if (e.id === examen.id) {
        this.removeExamen(e);
        this.guardarExamen(examen);
      }
    }
    this.storage.set('tarjeta', this.examenes);
  }

  async guardarExamen(examen: Examen) {
    this.examenes.unshift(examen);
    this.storage.set('tarjeta', this.examenes);
    this.cargarExamenes();
  }

  async buscarExamen(examen: Examen) {
    this.cargarExamenes();
    for (const e of this.examenes) {
       if (examen === e) {
         this.ex = e;
       }
    }
  }

  fechaHoy() {
    const today = new Date();
    const dd = String(today.getDate());
    const mm = String(today.getMonth() + 1); // enero es 0
    const yyyy = today.getFullYear();
    this.date = dd + '/' + mm + '/' + yyyy;
  }

  añadirParte(examen: Examen, parte: string) {
    this.fechaHoy();
    this.buscarExamen(examen);
    if ( this.ex.done.length === 0 ) {
      this.ex.done = [];
    }
    console.log(this.ex.done);
    this.ex.done.unshift(parte);
    this.removeExamen(examen);
    this.ex.check = false;
    this.ex.fechaparte = this.date;
    this.guardarExamen(this.ex);
  }

  removeExamen(examen: Examen) {
  this.examenes.splice(this.examenes.indexOf(examen), 1);
  this.storage.set('tarjeta', this.examenes);

}
  askrRemoveExamen(examen: Examen) {
    this.presentConfirm(examen);
  }

  askReactivate(examen: Examen) {
    this.presentReact(examen);
  }

  desactivarExamen(examen: Examen) {
    for ( const e of this.examenes) {
      if (e.id === examen.id) {
        examen.activo = false;
        this.removeExamen(e);
        this.guardarExamen(examen);
      }
    }
    this.storage.set('tarjeta', this.examenes);
  }

  reactivarExamen(examen: Examen) {
    for ( const e of this.examenes) {
      if (e.id === examen.id) {
        examen.activo = true;
        this.removeExamen(e);
        this.guardarExamen(examen);
      }
    }
    this.storage.set('tarjeta', this.examenes);
  }

async presentReact(examen: Examen) {
  const alert = await this.alertController.create({
    message: 'Reactivar?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancelar',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'reactivar',
        handler: () => {
          console.log('reactivar alumno');
          this.reactivarExamen(examen);
          setTimeout(() => this.cargarExamenes(), 300);
          this.nav.navigateForward('/inicio');
        }
      },
    ]
  });
  alert.present();
}

async presentConfirm(examen: Examen) {
  const alert = await this.alertController.create({
    message: 'desactivar?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancelar',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Desactivar',
        handler: () => {
          console.log('Desactivar alumno');
          this.desactivarExamen(examen);
          setTimeout(() => this.cargarExamenes(), 300);
          this.nav.navigateForward('/home');
        }
      },
    ]
  });
  alert.present();
}

async presentAlertPrompt(examenes: Examen[]) {
  const alert = await this.alertController.create({
    header: 'Apto!',
    inputs: [
      {
        name: 'R1 ',
        type: 'text',
        placeholder: 'Parte realizada'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancelar',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (alertData) => {
          const dato = JSON.stringify(alertData);
          let texto = dato.slice(8, JSON.stringify(alertData).length - 2);
          // console.log(texto, examenes);
          for (const e of examenes) {
              if (e.check === true) {
                texto = texto.concat(';').concat(e.nota.toString());
                this.añadirParte(e, texto);
                texto = texto.slice(0, -3);
            }
          }
          setTimeout(() => {
            this.cargarExamenes();
            // tslint:disable-next-line: radix
          }, 300);
        }
    }
    ]
  });

  await alert.present();
    }
  }




