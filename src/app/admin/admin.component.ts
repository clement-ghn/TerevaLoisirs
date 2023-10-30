import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  careerApplications: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllCareerApplications().subscribe((data) => {
      this.careerApplications = data.applications;
    });
  }
}
