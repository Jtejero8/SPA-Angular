import { Component, OnInit } from '@angular/core';

import { DocumentosService } from '../../servicios/documentos.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  constructor( private _documentosService:DocumentosService ) { }

  ngOnInit() {
  }

}
