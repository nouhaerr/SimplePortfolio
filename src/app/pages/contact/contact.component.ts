import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {} // ✅ Inject HttpClient
  onSubmit() {
    const contactData = {
      name: this.name,
      email: this.email,
      message: this.message
    };
    this.http.post('http://localhost:8080/api/contact', contactData).subscribe({
      next: () => {
        alert('Message sent successfully!');
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: (err) => {
        console.error('Error sending message', err);
        alert('Failed to send message.');
      }
    });
  }
}
// export class ContactComponent {
//   name: string = '';
//   email: string = '';
//   message: string = '';

//   onSubmit() {
//     console.log('Form submitted:', { name: this.name, email: this.email, message: this.message });
//     // Here you can add logic to send the form data to a server or email service.
    
//     alert('Thank you for reaching out!');
    
//     // Clear the form fields after submission
//     this.name = '';
//     this.email = '';
//     this.message = '';
//   }
// }
