import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss'],
})
export class GrupoComponent implements OnInit {
  @Input() foto: string;
  @Input() grupo: string;
  @Input() nome: string;

  constructor() { }

  ngOnInit() {}

}
