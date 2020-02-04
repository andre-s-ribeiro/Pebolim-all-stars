import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }

  getVideos() {
    // return this.http.request('GET','http://localhost:3000/ranking-times',{responseType:'json'});
    // return new Promise( (resolve,reject) => {
    //   firebase.database().ref('times')
    // });
    return firebase.database().ref('videos').once('value').then(snapshot => {

        console.log(snapshot.val());
        return snapshot.val();
    });
  }
}
