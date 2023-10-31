import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-hebergement2',
  templateUrl: './hebergement2.component.html',
  styleUrls: ['./hebergement2.component.css']
})
export class Hebergement2Component {

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

    const marker = L.marker([45.633331, -1.03333], { icon: customIcon }).addTo(map);
    marker.bindPopup('Camping Royan').openPopup();
  }
}
