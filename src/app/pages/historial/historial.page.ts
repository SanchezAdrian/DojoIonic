import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest-service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  alum: any;
  historial: any;
  constructor(public restService: RestService) { }

  ngOnInit() {
    this.alum = localStorage.getItem('IdAlumno');
    this.getHistorial();
  }

  getHistorial(){
    this.restService.getHistorial()
    .then(data => {
      this.historial = data;
      console.log(data);
      console.log(this.historial);
      });
      }

  getUrl(kyu: string) {
    return '\\assets\\kyus\\'+kyu+'.jpg';
    }
}


 