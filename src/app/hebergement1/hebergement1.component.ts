import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-hebergement1',
  templateUrl: './hebergement1.component.html',
  styleUrls: ['./hebergement1.component.css']
})
export class Hebergement1Component implements OnInit {
  public options: any = {
    layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '© OpenStreetMap contributors'
        })
    ],
    zoom: 6,
    center: L.latLng(46.303558, 6.0164252)
    
  };

  ngOnInit() {
    const map = L.map('map', this.options);
    L.control.layers(this.options.layers).addTo(map);


    const customIcon = L.icon({
      iconUrl: '../../assets/favicons/epingle.png',
      iconSize: [32, 32],
    });

    const marker = L.marker([46.303558, 6.0164252], { icon: customIcon }).addTo(map);
    marker.bindPopup('Camping les jonquilles').openPopup();
  }
}
