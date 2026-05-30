import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="py-5 text-white" [style.background-color]="configService.config.theme.primaryColor">
      <div class="container">
        <div class="row g-4 text-center text-md-start">
          <div class="col-md-6">
            <h4 class="fw-bold mb-3">{{ configService.config.name }}</h4>
            <p>{{ configService.config.contact.openingHours }}</p>
          </div>
          <div class="col-md-6 text-md-end">
            <h5 class="mb-3">Follow Us</h5>
            <div class="d-flex justify-content-center justify-content-md-end gap-3">
              <a *ngIf="configService.config.social.facebook" [href]="configService.config.social.facebook" class="text-white fs-3"><i class="bi bi-facebook"></i></a>
              <a *ngIf="configService.config.social.instagram" [href]="configService.config.social.instagram" class="text-white fs-3"><i class="bi bi-instagram"></i></a>
              <a *ngIf="configService.config.social.twitter" [href]="configService.config.social.twitter" class="text-white fs-3"><i class="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
        <hr class="my-4">
        <div class="text-center small">
          <p>&copy; {{ currentYear }} {{ configService.config.name }}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  configService = inject(ConfigService);
  currentYear = new Date().getFullYear();
}
