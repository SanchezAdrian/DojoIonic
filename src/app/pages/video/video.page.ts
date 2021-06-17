import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-videos',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  link: string;
  descripcion: string;
  trustedVideoUrlArray: SafeResourceUrl[] = [];

  constructor(
    public navCtrl: NavController,
    private domSanitizer: DomSanitizer, private route: ActivatedRoute, private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('video').then((video) => {
      this.trustedVideoUrlArray.push(this.domSanitizer.bypassSecurityTrustResourceUrl(video.Url));;
      this.descripcion = video.Descripcion;
    });

      // this.trustedVideoUrlArray.push(this.domSanitizer.bypassSecurityTrustResourceUrl(this.link));
    
  }

}