import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.login(this.username, this.password).subscribe((response) => {
      console.log(response);
      if (response['message'] === 'Connecte avec succes') {
        this.router.navigate(['/admin']);
      }
    });
  }
}
