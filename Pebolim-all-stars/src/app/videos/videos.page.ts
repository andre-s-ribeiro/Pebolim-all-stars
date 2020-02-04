import { Component, OnInit } from '@angular/core';
import { VideosService } from '../shared/services/videos.service';
import * as firebase from 'firebase';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(private videoService : VideosService,private sanitizer: DomSanitizer) { }
  videos :any[] = [];
  safeUrl
  // videosSafe :any[] = [];

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    // return this.http.request('GET','http://localhost:3000/ranking-times',{responseType:'json'});
    // return new Promise( (resolve,reject) => {
    //   firebase.database().ref('times')
    // });
    this.videoService.getVideos().then((data) => {
      this.videos = data;
      data.forEach(data2 => {
        this.videos.forEach(video => {
          video.url = this.sanitizer.bypassSecurityTrustResourceUrl(data2.url);
        })
      });
      console.log(this.videos);
    });    
  }
}
