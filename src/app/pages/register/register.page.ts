import { RestService } from './../../services/rest-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    username:'',
    password:'',

    // }
     }
    
  
    constructor(public restService: RestService, private router: Router) { }
  
    ngOnInit() {
    }
    
    cancelar() {
      this.router.navigate(['/home']);
    } 
    crear() {
       console.log( 
      //  this.datos.Dni,
      //  this.datos.Nombre,
      //  this.datos.Apellidos,
      //  this.datos.Direccion,
      //  this.datos.Telefono,
      //  this.datos.Activado,
      //  this.datos.nacimiento.toString().slice(0,10),
      this.user.username,  this.user.password
      )
      this.restService.crearUser(this.user)
      this.router.navigate(['/home']); 
    }

}
