import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChaveGruposService {
  constructor() { }

  getGrupos() {
    return firebase.database().ref('grupos').once('value').then(snapshot => {
      return snapshot.val();
    })

  }
}
