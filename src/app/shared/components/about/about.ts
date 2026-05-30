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
              <div class="about-image-experience position-absolute bg-white p-4 shadow-lg rounded-3 z-1 d-none d-md-block"
                   [style.border-bottom]="'5px solid ' + configService.config.theme.primaryColor"
                   style="bottom: -20px; right: -20px;">
                <h3 class="display-5 fw-bold mb-0" [style.color]="configService.config.theme.primaryColor">15+</h3>
                <p class="text-muted mb-0 fw-bold small">Years of Excellence</p>
              </div>
              <img [src]="configService.config.hero.backgroundImage" class="img-fluid rounded-4 shadow-lg w-100" [alt]="configService.config.name" style="height: 500px; object-fit: cover;">
            </div>
          </div>
          <div class="col-lg-6">
            <h6 class="text-uppercase fw-bold mb-3 tracking-widest" [style.color]="configService.config.theme.primaryColor">Authentic Taste</h6>
            <h2 class="display-4 fw-bold mb-4" [style.color]="configService.config.theme.textColor">Crafting Culinary Memories Since 2010</h2>
            <p class="lead opacity-75 mb-5" [style.color]="configService.config.theme.textColor">
              {{ configService.config.about }}
            </p>
            <div class="row g-4 mb-5">
              <div class="col-sm-6">
                <div class="d-flex align-items-center gap-3">
                  <div class="flex-shrink-0 bg-white shadow-sm p-3 rounded-circle">
                    <i class="bi bi-award fs-3" [style.color]="configService.config.theme.primaryColor"></i>
                  </div>
                  <div class="fw-bold">Award Winning Chef</div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-center gap-3">
                  <div class="flex-shrink-0 bg-white shadow-sm p-3 rounded-circle">
                    <i class="bi bi-star fs-3" [style.color]="configService.config.theme.primaryColor"></i>
                  </div>
                  <div class="fw-bold">Premium Quality</div>
                </div>
              </div>
            </div>
            <a href="#menu" class="btn btn-lg px-4 py-3 rounded-pill text-white shadow-sm" [style.background-color]="configService.config.theme.primaryColor">Discover Our Menu</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tracking-widest {
      letter-spacing: 0.2rem;
    }
    .z-1 {
      z-index: 1;
    }
  `]
})
export class AboutComponent {
  configService = inject(ConfigService);
}
