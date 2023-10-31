import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-carriere',
  templateUrl: './carriere.component.html',
  styleUrls: ['./carriere.component.css']
})
export class CarriereComponent implements OnInit {
  carriereForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.carriereForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cv: [null, Validators.required],
      coverLetter: [null, Validators.required]
    });
  }

  submitForm() {
    if (this.carriereForm.valid) {
      const formData = new FormData();
      formData.append('name', this.carriereForm.get('name')!.value);
      formData.append('email', this.carriereForm.get('email')!.value);
      const cvFile = this.carriereForm.get('cv')!.value;
      const coverLetterFile = this.carriereForm.get('coverLetter')!.value;
      
      if (cvFile instanceof File) {
        formData.append('cv', cvFile, cvFile.name);
      }
  
      if (coverLetterFile instanceof File) {
        formData.append('coverLetter', coverLetterFile, coverLetterFile.name);
      }
      this.userService.submitCareerApplication(formData).subscribe(
  (response) => {
    if (response) {
      console.log(response);
      if (response['message'] === 'Candidature soumise avec succès') {
        console.log('Candidature soumise avec succès !');
      } else {
        console.log('Erreur lors de la soumission de la candidature.');
      }
    } else {
      console.log('Réponse vide ou non définie.');
    }
  },
  (error) => {
    console.error('Une erreur s est produite :', error);
    // Vous pouvez ajouter du code pour gérer l'erreur ici.
  }
);
    
    }
  }
  
  
  
}
