import { Component, OnInit } from '@angular/core';

import { DocumentosService } from '../../servicios/documentos.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  constructor( private _documentosService:DocumentosService ) { }

  ngOnInit() {
  }

}
