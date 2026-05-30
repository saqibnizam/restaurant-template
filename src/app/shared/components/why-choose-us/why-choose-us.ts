import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-5" [style.background-color]="configService.config.theme.backgroundColor">
      <div class="container py-lg-5 text-center">
        <h2 class="display-4 fw-bold mb-5" [style.color]="configService.config.theme.primaryColor">Why Choose Us</h2>
        <div class="row g-4 justify-content-center">
          <div class="col-md-4" *ngFor="let feature of configService.config.whyChooseUs">
            <div class="p-4 h-100 rounded-4 shadow-sm bg-white transition-hover">
              <div class="mb-4 d-inline-block p-3 rounded-circle" [style.background-color]="configService.config.theme.primaryColor + '15'">
                <i [class]="'bi bi-' + feature.icon + ' display-5'" [style.color]="configService.config.theme.primaryColor"></i>
              </div>
              <h4 class="fw-bold mb-3" [style.color]="configService.config.theme.textColor">{{ feature.title }}</h4>
              <p class="text-muted mb-0">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .transition-hover {
      transition: transform 0.3s ease;
    }
    .transition-hover:hover {
      transform: translateY(-10px);
    }
  `]
})
export class WhyChooseUsComponent {
  configService = inject(ConfigService);
}
