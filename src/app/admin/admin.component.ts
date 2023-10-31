import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  careerApplications: any[] = [];

  constructor(private userService: UserService, private http: HttpClient) {}

  downloadCV(cvId: number, cvName: string) {
    this.downloadFile(`http://localhost:5000/${cvId}`, cvName);
  }

  downloadCoverLetter(coverLetterId: number, coverLetterName: string) {
    this.downloadFile(`http://localhost:5000/${coverLetterId}`, coverLetterName);
  }

  private downloadFile(fileUrl: string, fileName: string) {
    this.http
      .get(fileUrl, { responseType: 'blob' })
      .subscribe((data) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; 
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }

  ngOnInit() {
    this.userService.getAllCareerApplications().subscribe((data) => {
      this.careerApplications = data.applications;
    });
  }
}
