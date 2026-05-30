import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-5 bg-light">
      <div class="container py-lg-5">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-6 text-center">
            <h6 class="text-uppercase fw-bold mb-3 tracking-widest" [style.color]="configService.config.theme.primaryColor">Get In Touch</h6>
            <h2 class="display-4 fw-bold mb-3">We're Here For You</h2>
            <p class="text-muted">Have a question or want to make a reservation? Reach out to us!</p>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="contact-card card border-0 shadow-sm h-100 p-5 text-center transition-hover">
              <div class="icon-box mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                   [style.background-color]="configService.config.theme.backgroundColor">
                <i class="bi bi-geo-alt fs-2" [style.color]="configService.config.theme.primaryColor"></i>
              </div>
              <h4 class="fw-bold mb-3">Our Location</h4>
              <p class="text-muted mb-0">{{ configService.config.contact.address }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="contact-card card border-0 shadow-sm h-100 p-5 text-center transition-hover">
              <div class="icon-box mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                   [style.background-color]="configService.config.theme.backgroundColor">
                <i class="bi bi-telephone fs-2" [style.color]="configService.config.theme.primaryColor"></i>
              </div>
              <h4 class="fw-bold mb-3">Phone Number</h4>
              <p class="text-muted mb-0 fw-bold fs-5">{{ configService.config.contact.phone }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="contact-card card border-0 shadow-sm h-100 p-5 text-center transition-hover">
              <div class="icon-box mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                   [style.background-color]="configService.config.theme.backgroundColor">
                <i class="bi bi-envelope fs-2" [style.color]="configService.config.theme.primaryColor"></i>
              </div>
              <h4 class="fw-bold mb-3">Email Address</h4>
              <p class="text-muted mb-0">{{ configService.config.contact.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tracking-widest { letter-spacing: 0.2rem; }
    .icon-box { width: 80px; height: 80px; }
    .transition-hover {
      transition: all 0.3s ease;
    }
    .transition-hover:hover {
      transform: translateY(-10px);
      box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
    }
  `]
})
export class ContactComponent {
  configService = inject(ConfigService);
}
