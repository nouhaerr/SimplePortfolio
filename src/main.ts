import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Assurez-vous que AppComponent est standalone
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
// import './styles.css'; // ✅ Ensure this is here


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    provideHttpClient()
  ],
});
