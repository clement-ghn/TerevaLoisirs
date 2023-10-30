import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-hebergement1',
  templateUrl: './hebergement1.component.html',
  styleUrls: ['./hebergement1.component.css']
})
export class Hebergement1Component { //pour revenir a la normal, retirer tout dans le componnent
  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }
}
