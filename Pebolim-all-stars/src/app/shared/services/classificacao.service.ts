import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PlacarService {

  constructor() { }

  getTimes() {
    return firebase.database().ref('ranking-times').once('value').then(snapshot => {
      return snapshot.val();
    });
  }

  getJogadores() {    
    return firebase.database().ref('ranking-pessoal').once('value').then(snapshot => {
      return snapshot.val();
    });
  }
}
