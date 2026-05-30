import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-opening-hours',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-5" [style.background-color]="configService.config.theme.backgroundColor">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="bg-white p-5 rounded-4 shadow-sm text-center">
              <i class="bi bi-clock display-4 mb-4 d-block" [style.color]="configService.config.theme.primaryColor"></i>
              <h2 class="fw-bold mb-4" [style.color]="configService.config.theme.textColor">Opening Hours</h2>
              <ul class="list-unstyled mb-0">
                <li *ngFor="let hour of configService.config.openingHours" class="d-flex justify-content-between py-2 border-bottom">
                  <span class="fw-bold">{{ hour.day }}</span>
                  <span class="text-muted">{{ hour.hours }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class OpeningHoursComponent {
  configService = inject(ConfigService);
}
