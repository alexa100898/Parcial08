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
  planetas:any = [
    {nombre: 'Tierra', distancia: '5m', lunas: '1', masa: '25kg'},
    {nombre: 'Marte', distancia: '15m', lunas: '2', masa: '75kg'},
    {nombre: 'Jupiter', distancia: '25m', lunas: '1', masa: '125kg'},
    {nombre: 'Saturno', distancia: '35m', lunas: '2', masa: '15kg'},
    {nombre: 'Pluton', distancia: '45m', lunas: '1', masa: '5kg'}
  ]
}
