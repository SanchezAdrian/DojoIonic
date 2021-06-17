import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';



@Injectable({
 providedIn: 'root'
})
export class RestService {
  // apiUrl = 'http://127.0.0.1:8000/api';
  apiUrl = 'https://sanchezramirezadrian.pythonanywhere.com//api';
  token: any;
  id:string;
  cliente: {
    id: string,
    Nombre: string,
    Apellidos: string,
    Direccion: string,
    FechaNacimiento: string,
    Rol: string,
    Activado: boolean ,
  }

  constructor(private http: HttpClient, public alertController: AlertController,private router: Router) { }

 getAlumnos() {
 const tok = localStorage.getItem("token")
 const headers = new HttpHeaders()
 .set('Authorization', 'token ' + tok);
 return new Promise(resolve => {
  this.http.get(this.apiUrl + '/alumnos/',  {
//  // tslint:disable-next-line: object-literal-shorthand
  headers: headers})
 .subscribe(data => {
 resolve(data);
 }, err => {
 console.log(err);
 });
 });

}

getVideos() {
 return new Promise(resolve => {
  this.http.get(this.apiUrl + '/videos/')
 .subscribe(data => {
 resolve(data);
 console.log(data);
 }, err => {
 console.log(err);
 });
 });

}

getParteExamen() {
  const tok = localStorage.getItem("token")
 const headers = new HttpHeaders()
 .set('Authorization', 'token ' + tok);
  return new Promise(resolve => {
    this.http.get(this.apiUrl + '/partesExamen/', {
      headers:headers})
   .subscribe(data => {
   resolve(data);
   }, err => {
   console.log(err);
   });
   });
}

getParte() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl + '/partes/')
   .subscribe(data => {
   resolve(data);
   }, err => {
   console.log(err);
   });
   });
}


getTutores() {
  const tok = localStorage.getItem("token")
 const headers = new HttpHeaders()
 .set('Authorization', 'token ' + tok);
 return new Promise(resolve => {
  this.http.get(this.apiUrl + '/tutores/', {
//  // tslint:disable-next-line: object-literal-shorthand
headers: headers})
 .subscribe(data => {
 resolve(data);
 }, err => {
 console.log(err);
 });
 });

}

getHistorial() {
  const tok = localStorage.getItem("token")
 const headers = new HttpHeaders()
 .set('Authorization', 'token ' + tok);
 return new Promise(resolve => {
  this.http.get(this.apiUrl + '/historial/' , {
//  // tslint:disable-next-line: object-literal-shorthand
 headers: headers})
 .subscribe(data => {
 resolve(data);
 console.log(data);
 }, err => {
 console.log(err);
 });
 });

}

detailAlumno() {
  const tok = localStorage.getItem("token")
  setTimeout('',500);
  const IDC = localStorage.getItem("IdAlumno");
  console.log(IDC)
  const headers = new HttpHeaders()
  .set('Authorization', 'token ' + tok);
  console.log(headers)
  return new Promise(resolve => {
 this.http.get(this.apiUrl + '/alumnos/' + IDC, {
  // tslint:disable-next-line: object-literal-shorthand
   headers: headers})
  .subscribe(data => {
  resolve(data);
  console.log(data);
  }, err => {
  console.log(err);
  });
  });
}

NuevoExamen() {
  const IDA = localStorage.getItem("IdAlumno");
  let idAlum = IDA;
  const tok = localStorage.getItem("token")
 const headers = new HttpHeaders()
 .set('Authorization', 'token ' + tok);
  return new Promise(resolve => {
    this.http.post(this.apiUrl + '/asignacion/' + IDA, {id: IDA},
     // tslint:disable-next-line: object-literal-shorthand
     {headers: headers})
     .subscribe(data => {
     resolve(data);
     console.log(data);
     }, err => {
     console.log(err);
     });
     });
}

FinExamen() {
  const IDA = localStorage.getItem("IdAlumno");
  let idAlum = IDA;
  const tok = localStorage.getItem("token")
 const headers = new HttpHeaders()
 .set('Authorization', 'token ' + tok);
  return new Promise(resolve => {
    this.http.post(this.apiUrl + '/finalizacion/' + IDA, {id: IDA}, 
     // tslint:disable-next-line: object-literal-shorthand
     {headers: headers})
     .subscribe(data => {
     resolve(data);
     console.log(data);
     }, err => {
     console.log(err);
     });
     });
}


// Plantilla alumno 
//id: parte.id,
// Nombre: parte.Nombre,
// Apellidos: parte.Apellidos,
// Direccion: parte.Direccion,
// FechaNacimiento: parte.FechaNacimiento,
// FechaUltimoExamen: parte.FechaUltimoExamen,
// Telefono: parte.Telefono,
// Activado: parte.Activado,
// Clase: parte.Clase,
// Horario: parte.Horario,
// examenActivo: parte.examenActivo,
// Kyu: parte.Kyu,
// tur: parte.tur,

updateParteExamen(parte:any){

  let postData = {
    id: parte.id,
    Finalizada: parte.Finalizada,
    Info: parte.Info,
    Nota: parte.Nota,
    Part: parte.Part,
    Alum: parte.Alum,
    Realizadas: parte.Realizadas,
  }
    console.log(parte)
    const tok = localStorage.getItem("token")
    setTimeout('',500);
    console.log(tok)
    const headers = new HttpHeaders()
    .set('Authorization', 'token ' + tok);
    console.log(headers)
    return new Promise(resolve => {
    this.http.post(this.apiUrl + '/partes/' + parte.id, postData, {
    headers: headers
  })
  .subscribe(data => {
  resolve(data);
  }, err => {
  console.log(err);
  });
  });
  
  }

crearUser(datos:any){
  return new Promise(resolve => {
    this.http.post(this.apiUrl + '/register/',
    {
      username: datos.username,
      password: datos.password,
    })
    .subscribe(data => {
    resolve(data);
    }, err => {
    console.log(err);
    });
    });
    
    }


login(usuario:string, pass:string) {

  
  localStorage.setItem("user",usuario);
  localStorage.setItem("password",pass);
  return new Promise(resolve => {
  this.http.post(this.apiUrl + '/token/',
  {
  username: usuario,
  password: pass
  })
  .subscribe(data => {
  this.token = data;
  console.log(this.token)
  resolve(data);
  localStorage.setItem("token",this.token.token);
  localStorage.setItem('IdTutor' , this.token.Tutor.id);
  localStorage.setItem('NTutor' , this.token.Tutor.Nombre);
  localStorage.setItem("login",'true');
  }, err => {
  console.log(err);
  if(err.status === 401 ){
    this.presentReact();
  }
  
  });
  });
  
  }

  async presentReact() {
    const alert = await this.alertController.create({
      message: 'Contraseña y/o usuario incorrectos!',
    });
    alert.present();
  }

//   removeCliente(id:string) {
//     const tok = localStorage.getItem("token")
//     const headers = new HttpHeaders()
//     .set('Authorization', 'token ' + tok);
//     return new Promise(resolve => {
//    this.http.delete(this.apiUrl + '/clientes/' + id, {
//     // tslint:disable-next-line: object-literal-shorthan
//     headers: headers})
//     .subscribe(data => {
//     resolve(data);
//     console.log(data);
//     }, err => {
//     console.log(err);
//     });
//     });
//   }

//   askRmvCliente(id:string) {
//     this.presentConfirm(id);
//   }

//   async presentConfirm(id: string) {
//     const alert = await this.alertController.create({
//       message: 'Seguro que desea eliminar este cliente?',
//       buttons: [
//         {
//           text: 'Cancelar',
//           role: 'cancelar',
//           handler: () => {
//           }
//         },
//         {
//           text: 'Eliminar',
//           handler: () => {
//             this.removeCliente(id);
//             setTimeout('',700);
//             this.router.navigate(['/home']); 
//           }
//         },
//       ]
//     });
//     alert.present();
//   }
  
 
 }

