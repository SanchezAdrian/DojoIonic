import { Component, OnInit } from '@angular/core';

import { NavController, AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/app/model/examen';
import { MenuController } from '@ionic/angular';
import { RestService } from '../../services/rest-service';
import { Alumno } from 'src/app/model/alumno';

@Component({
  selector: 'app-selector-clase',
  templateUrl: './selector-clase.page.html',
  styleUrls: ['./selector-clase.page.scss'],
})
export class SelectorClasePage implements OnInit {

  clases = [['1','Primera Clase'],['2','Segunda Clase'],['3','Tercera Clase']];
  constructor(private nav: NavController, private modal: ModalController,
    private menu: MenuController, private restService: RestService, private router: Router ) {
    }

  ngOnInit() {
  }

  buscar(n: string) {
    localStorage.setItem('ClaseActual' , n);
    setTimeout('', 1500);
    this.router.navigate(['/selector-maestro']);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
} 
