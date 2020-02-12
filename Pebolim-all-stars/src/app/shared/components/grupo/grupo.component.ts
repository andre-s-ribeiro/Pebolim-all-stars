import { Component, OnInit, Input } from '@angular/core';
import { Times } from '../../model/times.model';

@Component({
  selector: 'grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss'],
})
export class GrupoComponent implements OnInit {
 @Input() times: Times[];
 @Input() grupo: number;
 name: string;

  constructor() { }

  ngOnInit() { 
    this.name = String.fromCharCode(65 + this.grupo)
  }

}
