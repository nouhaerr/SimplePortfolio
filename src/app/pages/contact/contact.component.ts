import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSending: boolean = false;
  submitted: boolean = false;

  constructor() {}

  onSubmit(form: any) {
    this.submitted = true;
    if (form.invalid) return;

    this.isSending = true;

    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    emailjs.send('service_d1f11ri', 'template_i59wgb5', templateParams, 'IrxJf5-iSUPyglRiA')
      .then(() => {
        alert('✅ Message sent successfully!');
        form.resetForm();
        this.submitted = false;
        this.isSending = false;
      }, (error) => {
        console.error('FAILED...', error);
        alert('❌ Failed to send message.');
        this.isSending = false;
      });
  }
}
