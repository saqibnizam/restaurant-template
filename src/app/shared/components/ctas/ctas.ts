import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-reservation-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-5 text-white" [style.background-color]="configService.config.theme.primaryColor">
      <div class="container text-center py-4">
        <h2 class="display-5 fw-bold mb-3">Ready to join us?</h2>
        <p class="lead mb-4 opacity-90">Book your table now and enjoy a wonderful dining experience.</p>
        <div class="d-flex justify-content-center gap-3">
          <button class="btn btn-light btn-lg px-5 rounded-pill fw-bold" [style.color]="configService.config.theme.primaryColor">
            Make a Reservation
          </button>
          <a [href]="'tel:' + configService.config.contact.phone" class="btn btn-outline-light btn-lg px-5 rounded-pill">
            Call Us
          </a>
        </div>
      </div>
    </section>
  `
})
export class ReservationCTAComponent {
  configService = inject(ConfigService);
}

@Component({
  selector: 'app-whatsapp-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="whatsapp-float position-fixed bottom-0 end-0 m-4 z-3" *ngIf="configService.config.contact.whatsapp">
      <a [href]="'https://wa.me/' + configService.config.contact.whatsapp" target="_blank"
         class="btn btn-success rounded-circle shadow-lg p-3 d-flex align-items-center justify-content-center"
         style="width: 60px; height: 60px;">
        <i class="bi bi-whatsapp fs-2"></i>
      </a>
    </div>
  `,
  styles: [`
    .whatsapp-float {
      transition: transform 0.3s ease;
    }
    .whatsapp-float:hover {
      transform: scale(1.1);
    }
  `]
})
export class WhatsAppCTAComponent {
  configService = inject(ConfigService);
}
