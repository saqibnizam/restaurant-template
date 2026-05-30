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
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <h4 class="fw-bold mb-4">{{ configService.config.name }}</h4>
            <p class="mb-4 opacity-75">
              Experience the best culinary delights with our carefully crafted menu and exceptional service.
            </p>
            <div class="d-flex gap-3">
              <a *ngIf="configService.config.social.facebook" [href]="configService.config.social.facebook" class="text-white fs-4 transition-hover"><i class="bi bi-facebook"></i></a>
              <a *ngIf="configService.config.social.instagram" [href]="configService.config.social.instagram" class="text-white fs-4 transition-hover"><i class="bi bi-instagram"></i></a>
              <a *ngIf="configService.config.social.twitter" [href]="configService.config.social.twitter" class="text-white fs-4 transition-hover"><i class="bi bi-twitter"></i></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class="fw-bold mb-4">Quick Links</h5>
            <ul class="list-unstyled opacity-75">
              <li class="mb-2"><a href="#home" class="text-white text-decoration-none">Home</a></li>
              <li class="mb-2"><a href="#menu" class="text-white text-decoration-none">Menu</a></li>
              <li class="mb-2"><a href="#about" class="text-white text-decoration-none">About Us</a></li>
              <li class="mb-2"><a href="#contact" class="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="fw-bold mb-4">Opening Hours</h5>
            <p class="opacity-75 mb-0">{{ configService.config.contact.openingHours }}</p>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="fw-bold mb-4">Newsletter</h5>
            <p class="small opacity-75 mb-3">Subscribe to get the latest updates and offers.</p>
            <div class="input-group mb-3">
              <input type="text" class="form-control bg-transparent text-white border-light opacity-50" placeholder="Email address">
              <button class="btn btn-outline-light" type="button">Join</button>
            </div>
          </div>
        </div>
        <hr class="my-5 opacity-25">
        <div class="text-center small opacity-50">
          <p class="mb-0">&copy; {{ currentYear }} {{ configService.config.name }}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .transition-hover {
      transition: opacity 0.3s ease;
    }
    .transition-hover:hover {
      opacity: 0.7;
    }
    input::placeholder {
      color: white;
    }
  `]
})
export class FooterComponent {
  configService = inject(ConfigService);
  currentYear = new Date().getFullYear();
}
