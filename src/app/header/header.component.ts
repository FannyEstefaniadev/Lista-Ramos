import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  myFontSize = '20px';
  
  constructor() {}
alumnos: string[] = ['Gustavo', 'Fanny', 'Nestor', 'Felipe', 'Camila', 'Mirta', 'Juanka', 'Marta', 'Matias'];

}
