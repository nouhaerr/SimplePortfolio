import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-contact',
  standalone: true, // 👈 this line
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    console.log('Form submitted:', { name: this.name, email: this.email, message: this.message });
    // Here you can add logic to send the form data to a server or email service.
    
    alert('Thank you for reaching out!');
    
    // Clear the form fields after submission
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
