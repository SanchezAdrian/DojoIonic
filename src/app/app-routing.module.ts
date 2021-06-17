import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'nuevo-examen',
    loadChildren: () => import('./pages/nuevo-examen/nuevo-examen.module').then( m => m.NuevoExamenPageModule)
  },
  {
    path: 'examen',
    loadChildren: () => import('./pages/examen/examen.module').then( m => m.ExamenPageModule)
  },
  {
    path: 'home', pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./pages/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'maestro-examenes-activos',
    loadChildren: () => import('./pages/maestro-examenes-activos/maestro-examenes-activos.module').then( m => m.MaestroExamenesActivosPageModule)
  },
  {
    path: 'maestro-sin-examen',
    loadChildren: () => import('./pages/maestro-sin-examen/maestro-sin-examen.module').then( m => m.MaestroSinExamenPageModule)
  },
  {
    path: 'tutor-alumno',
    loadChildren: () => import('./pages/tutor-alumno/tutor-alumno.module').then( m => m.TutorAlumnoPageModule)
  },
  {
    path: 'tutor-alumnos',
    loadChildren: () => import('./pages/tutor-alumnos/tutor-alumnos.module').then( m => m.TutorAlumnosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'selector-clase',
    loadChildren: () => import('./pages/selector-clase/selector-clase.module').then( m => m.SelectorClasePageModule)
  },
  {
    path: 'selector-maestro',
    loadChildren: () => import('./pages/selector-maestro/selector-maestro.module').then( m => m.SelectorMaestroPageModule)
  },
  {
    path: 'tutor-alumno-examen',
    loadChildren: () => import('./pages/tutor-alumno-examen/tutor-alumno-examen.module').then( m => m.TutorAlumnoExamenPageModule)
  },
  {
    path: 'tutor-alumno-categoria',
    loadChildren: () => import('./pages/tutor-alumno-categoria/tutor-alumno-categoria.module').then( m => m.TutorAlumnoCategoriaPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
