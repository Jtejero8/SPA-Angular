import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  loading: boolean= false;

  constructor() {
    document.onload;
    this.loading= false;
   }

  ngOnInit() {
  }

}
