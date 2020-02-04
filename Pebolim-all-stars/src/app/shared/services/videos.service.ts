import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }
  getVideos() {
    return firebase.database().ref('videos').once('value').then(snapshot => {        
      return snapshot.val();
    });
  }
}
