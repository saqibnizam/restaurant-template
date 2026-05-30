import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-5" [style.background-color]="configService.config.theme.backgroundColor">
      <div class="container py-lg-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="about-image-wrapper position-relative">
              <img [src]="configService.config.about.image"
                   class="img-fluid rounded-4 shadow-lg w-100"
                   [alt]="configService.config.name"
                   style="height: 500px; object-fit: cover;">
            </div>
          </div>
          <div class="col-lg-6">
            <h6 class="text-uppercase fw-bold mb-3 tracking-widest" [style.color]="configService.config.theme.primaryColor">
              About Us
            </h6>
            <h2 class="display-4 fw-bold mb-4" [style.color]="configService.config.theme.textColor">
              {{ configService.config.about.title }}
            </h2>
            <p class="lead opacity-75 mb-5" [style.color]="configService.config.theme.textColor">
              {{ configService.config.about.content }}
            </p>

            <div class="row g-4 mb-5" *ngIf="configService.config.about.features?.length">
              <div class="col-sm-6" *ngFor="let feature of configService.config.about.features">
                <div class="d-flex align-items-center gap-3">
                  <div class="flex-shrink-0 bg-white shadow-sm p-3 rounded-circle">
                    <i [class]="'bi bi-' + feature.icon + ' fs-3'" [style.color]="configService.config.theme.primaryColor"></i>
                  </div>
                  <div class="fw-bold" [style.color]="configService.config.theme.textColor">{{ feature.title }}</div>
                </div>
              </div>
            </div>

            <a href="#menu" class="btn btn-lg px-4 py-3 rounded-pill text-white shadow-sm"
               [style.background-color]="configService.config.theme.primaryColor">
               Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tracking-widest {
      letter-spacing: 0.2rem;
    }
  `]
})
export class AboutComponent {
  configService = inject(ConfigService);
}
