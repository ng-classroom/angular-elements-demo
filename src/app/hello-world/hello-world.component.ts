import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  @Input() rname;
  @Input() occupation;
  @Input() location;

  @Output() display = new EventEmitter();
  constructor() { }
  showInfo() {
    this.display.emit(`Nombre: ${this.rname}
    Ocupacion: ${this.occupation}
    Localizado en: ${this.location}`);
  }
  ngOnInit() {
  }
}
