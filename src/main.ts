import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CvComponent } from './app/cv/cv.component';

bootstrapApplication(CvComponent, {
  providers: [provideHttpClient()]
})
  .catch((err) => console.error(err));
