import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserData } from '../user.interface';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  users: UserData | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: UserData) => {
      this.users = data; // Assurez-vous que la structure des données correspond à l'interface UserData
    });
  }
}
