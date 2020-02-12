import { Component, OnInit } from '@angular/core';
import { VideosService } from '../shared/services/videos.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  constructor(private videoService :VideosService, private sanitizer :DomSanitizer) { }
  videos :any[];

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideos().then((data) => {
      this.videos = data;
      data.forEach(data2 => {
        this.videos.forEach(video => {
          video.url = this.sanitizer.bypassSecurityTrustResourceUrl(data2.url);
        })
      });      
    });    
  }

  doRefresh($event){
    this.ngOnInit();
    setTimeout(() => {      
      $event.target.complete();
    }, 500);
  }
}
