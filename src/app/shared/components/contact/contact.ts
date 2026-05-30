import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-5" [style.background-color]="configService.config.theme.backgroundColor">
      <div class="container">
        <h2 class="text-center mb-5 display-4 fw-bold" [style.color]="configService.config.theme.primaryColor">Contact Us</h2>
        <div class="row g-4 justify-content-center">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 p-4 text-center">
              <i class="bi bi-geo-alt fs-1 mb-3" [style.color]="configService.config.theme.primaryColor"></i>
              <h5 class="fw-bold">Address</h5>
              <p>{{ configService.config.contact.address }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 p-4 text-center">
              <i class="bi bi-telephone fs-1 mb-3" [style.color]="configService.config.theme.primaryColor"></i>
              <h5 class="fw-bold">Phone</h5>
              <p>{{ configService.config.contact.phone }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 p-4 text-center">
              <i class="bi bi-envelope fs-1 mb-3" [style.color]="configService.config.theme.primaryColor"></i>
              <h5 class="fw-bold">Email</h5>
              <p>{{ configService.config.contact.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  configService = inject(ConfigService);
}
