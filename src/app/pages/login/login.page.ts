import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest-service';
import { Router } from '@angular/router';
import { NavController, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string;
  password:string;
  datos:any;
  constructor(public restService: RestService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  hacerLogin() {
    localStorage.setItem('login','true');
    this.restService.login(this.usuario, this.password)
    .then(data => {
    this.datos = data;
    console.log(this.datos +"TS")
    this.check()
    console.log(localStorage.getItem('login'));
    });
  
    }
    
    check() {
      if (localStorage.getItem('login')==='false') {
        this.presentReact();
      }
      console.log(this.datos)
      if (this.datos.token != null) {
        if(this.datos.Tutor.id===1) {
          this.router.navigate(['/selector-clase']);
        }
        else { 
        this.router.navigate(['/home']);
        }
      }
      
    }

    async presentReact() {
      const alert = await this.alertController.create({
        message: 'Contraseña y/o usuario incorrectos!',
      });
      alert.present();
    }

   
   
}