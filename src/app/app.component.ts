import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ExamenesServiceService } from '../app/services/examenes-service.service';
import { NavController, AlertController, ModalController } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public data: ExamenesServiceService,
    private nav: NavController,
    private menu: MenuController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  home() {
    this.nav.navigateForward('/home');
    this.menu.close('first');
  }

  ir(n: number) {
    this.data.cargarExamenesCla(n);
    this.data.cargarExamenes();
    setTimeout('' , 300);
    this.nav.navigateForward('/home');
    this.menu.close('first');
    this.menu.close('second');
  }

  ir2(n: number) {
    this.data.cargarExamenesCla(n);
    this.data.cargarExamenes();
    setTimeout('' , 300);
    this.nav.navigateForward('/inicio');
    this.menu.close('first');
    this.menu.close('second');
  }

  video() {
    this.nav.navigateForward('/videos')
    this.menu.close('first');
    this.menu.close('second');
  }
}
