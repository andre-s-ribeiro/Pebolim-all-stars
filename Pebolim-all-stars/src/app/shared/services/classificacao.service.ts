import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacarService {

  constructor(private http: HttpClient) { }

  getTimes() {
    return this.http.request('GET','http://localhost:3000/ranking-times',{responseType:'json'});
  }

  getJogadores() {
    return this.http.get('http://localhost:3000/ranking-pessoal');
  }
}
