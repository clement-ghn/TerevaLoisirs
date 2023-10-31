import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './user.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserData> {
    return this.http.get<UserData>(`${this.baseUrl}/users`);
  }

  login(username: string, password: string): Observable<any> {
    const user = { username, password };
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  submitCareerApplication(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/career-applications`, formData);
  }

  getAllCareerApplications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/career-applications`);
  }
}
