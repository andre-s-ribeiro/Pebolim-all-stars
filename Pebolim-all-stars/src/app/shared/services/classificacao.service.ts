import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PlacarService {

  constructor() { }

  getTimes() {
    // return this.http.request('GET','http://localhost:3000/ranking-times',{responseType:'json'});
    // return new Promise( (resolve,reject) => {
    //   firebase.database().ref('times')
    // });
    firebase.database().ref('ranking-times').once('value').then(snapshot => {
        console.log(snapshot.val());
    });
  }

  getJogadores() {
    // return this.http.get('http://localhost:3000/ranking-pessoal');
    firebase.database().ref('ranking-pessoal').once('value').then(snapshot => {
        console.log(snapshot.val());
    });
  }
}
