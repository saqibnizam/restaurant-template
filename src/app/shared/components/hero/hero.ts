import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section d-flex align-items-center text-center text-white position-relative overflow-hidden">
      <div class="hero-overlay position-absolute w-100 h-100" [style.background-image]="'url(' + configService.config.hero.backgroundImage + ')'"></div>
      <div class="hero-mask position-absolute w-100 h-100" style="background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%);"></div>
      <div class="container position-relative z-1">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <h1 class="display-1 fw-bold mb-4 animate__animated animate__fadeInDown text-uppercase tracking-wider">
              {{ configService.config.hero.title }}
            </h1>
            <p class="lead mb-5 animate__animated animate__fadeInUp fs-3 opacity-90">
              {{ configService.config.hero.subtitle }}
            </p>
            <div class="d-flex justify-content-center gap-3 animate__animated animate__fadeInUp animate__delay-1s">
              <a *ngIf="configService.config.hero.ctaText"
                 [href]="configService.config.hero.ctaLink || '#menu'"
                 class="btn btn-primary btn-lg px-5 py-3 shadow-lg border-0 rounded-pill"
                 [style.background-color]="configService.config.theme.primaryColor">
                {{ configService.config.hero.ctaText }}
              </a>
              <a href="#about" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      height: 100vh;
      min-height: 600px;
      background-size: cover;
      background-position: center;
    }
    @media (max-width: 576px) {
      .hero-section {
        min-height: 500px;
        height: auto;
        padding: 100px 0;
      }
      .display-1 {
        font-size: 3rem;
      }
    }
    .hero-overlay {
      background-size: cover;
      background-position: center;
      transition: transform 10s ease;
      filter: brightness(0.8);
    }
    .hero-section:hover .hero-overlay {
      transform: scale(1.1);
    }
    .tracking-wider {
      letter-spacing: 0.1em;
    }
  `]
})
export class HeroComponent {
  configService = inject(ConfigService);
}
