import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { RestService } from '../../services/rest-service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  trustedVideoUrlArray: SafeResourceUrl[] = [];
  video = {
    nombre:"Como colocarse el cinturon",
    link: "https://www.youtube.com/embed/iXbEcCZIikk",
    descripcion: "Como colocarse el cinturon"
  }
  VideosOnline: any;
  alumnos: any;
  alumnosCustodia = [];
  tutor: any;
  constructor(
    public navCtrl: NavController, public menu: MenuController,
    private domSanitizer: DomSanitizer, private router: Router, private storage: Storage, private restService: RestService,  public alertController: AlertController
  ) { }
 
  ngOnInit(): void {
    this.obtenervideos();
    this.obtenerAlumnos();
    this.tutor=localStorage.getItem('IdTutor');
  
  }

  async fallo() {
    const alert = await this.alertController.create({
      message: 'Sin prisas! Estara disponible cuando tengas algo mas de nivel ;)',
    });
    alert.present();
  }

  obtenerAlumnos() {
    this.restService.getAlumnos()
    .then(data => {
    this.alumnos = data;
    for(const x in this.alumnos) {
      if(this.alumnos[x].tur===Number(localStorage.getItem('IdTutor')))
      this.alumnosCustodia.push(this.alumnos[x]);
    }
    console.log(data);
    });
    console.log(this.alumnos);
    }

    check() {
      console.log(this.VideosOnline);
      console.log(this.alumnosCustodia);
    }

  obtenervideos() {
    this.restService.getVideos()
    .then(data => {
    this.VideosOnline = data;
    console.log(data);
    });
    console.log(this.VideosOnline);
  
    }


  async verVideo(video) {
    await this.storage.set('video', video);
    // console.log(this.storage.get())
    this.router.navigate(['/video']);

  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  

    obtenerAlumnosCustodia() {
      console.log(this.alumnos);
      for(const x in this.alumnos) {
        console.log(x);
        if(this.alumnos[x].tur===Number(localStorage.getItem('IdTutor')))
        console.log(this.alumnos[x])
      }
    }
  comprobarNivel(nivel: any){
    const kyus =['B','BA','A','AN','N','NV','V','VAZ','AZ','AZM','M'];
    let lvlAlumno = 0;
    let lvlVideo = 0;
   
    for ( const x in this.alumnosCustodia){
      for( const y in kyus){
        if(kyus[y]===this.alumnosCustodia[x].kyu) {
          lvlAlumno = Number(y);
        }
      }
    }
    console.log(lvlAlumno);

    for(const y in kyus) {
      if(kyus[y]===nivel) {
        lvlVideo = Number(y);
      }
    }
    console.log(lvlVideo);

    if( lvlAlumno >= lvlVideo){
      return true;
    }
    else {
      return false;
    }

  }

}