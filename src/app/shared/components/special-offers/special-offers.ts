import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-special-offers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="offers" class="py-5" [style.background-color]="configService.config.theme.backgroundColor">
      <div class="container">
        <h2 class="text-center mb-5 display-4 fw-bold" [style.color]="configService.config.theme.primaryColor">Special Offers</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let offer of configService.config.offers">
            <div class="card h-100 border-0 shadow-sm overflow-hidden text-white">
              <img [src]="offer.image" class="card-img h-100 object-fit-cover" [alt]="offer.title" style="filter: brightness(0.6);">
              <div class="card-img-overlay d-flex flex-column justify-content-center text-center p-4">
                <h3 class="card-title fw-bold">{{ offer.title }}</h3>
                <p class="card-text">{{ offer.description }}</p>
                <div class="display-6 fw-bold mb-3">{{ offer.discount }}</div>
                <div *ngIf="offer.code" class="mt-2">
                  <span class="badge rounded-pill px-3 py-2" [style.background-color]="configService.config.theme.primaryColor">
                    USE CODE: {{ offer.code }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .object-fit-cover { object-fit: cover; }
  `]
})
export class SpecialOffersComponent {
  configService = inject(ConfigService);
}
