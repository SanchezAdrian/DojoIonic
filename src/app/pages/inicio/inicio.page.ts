import { Component, OnInit } from '@angular/core';
import { ExamenesServiceService } from '../../services/examenes-service.service';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/app/model/examen';
import { MenuController } from '@ionic/angular';
import { RestService } from '../../services/rest-service';
import { Alumno } from 'src/app/model/alumno';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    tutores: any;
    checked: boolean;
    numeros: number[];
    constructor(private nav: NavController, private modal: ModalController,
                private menu: MenuController, private restService: RestService, private router: Router ) {
                }
    ngOnInit(): void {
      this.obtenerTutores();
      console.log(this.tutores);
    }

    obtenerTutores() {
      this.restService.getTutores()
      .then(data => {
      this.tutores = data;
      console.log(data);
      console.log(this.tutores);
      });
      console.log(this.tutores);
      }

    getUrl(kyu: string) {
        return '\\assets\\kyus\\' + kyu + '.jpg';
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
      console.log(this.tutores);
    }

    buscar(id: string) {
      localStorage.setItem('IdTutor' , id);
      setTimeout('', 1500);
      this.router.navigate(['/home']);
    }

  


}
