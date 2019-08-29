import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial2808';
nombre:string = '';
distancia:string = '';
lunas:string = '';
masa:string = '';
anillos:string = '';
  planetas:any = [
    {nombre: 'Tierra', distancia: '5m', lunas: '1', masa: '25kg', anillos: 1, tipo:1},
    {nombre: 'Marte', distancia: '15m', lunas: '2', masa: '75kg', anillos: 2, tipo:2},
    {nombre: 'Jupiter', distancia: '25m', lunas: '1', masa: '125kg', anillos: 1, tipo:1},
    {nombre: 'Saturno', distancia: '35m', lunas: '2', masa: '15kg', anillos: 2, tipo:2},
    {nombre: 'Pluton', distancia: '45m', lunas: '1', masa: '5kg', anillos: 1, tipo:1}
  ]
}
