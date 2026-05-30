import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section d-flex align-items-center text-center text-white"
      [style.background-image]="'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + configService.config.hero.backgroundImage + ')'">
      <div class="container">
        <h1 class="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">{{ configService.config.hero.title }}</h1>
        <p class="lead mb-5 animate__animated animate__fadeInUp">{{ configService.config.hero.subtitle }}</p>
        <a href="#menu" class="btn btn-lg px-5 py-3 shadow"
           [style.background-color]="configService.config.theme.primaryColor"
           [style.border-color]="configService.config.theme.primaryColor"
           style="color: white;">
          {{ configService.config.hero.ctaText }}
        </a>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      height: 80vh;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }
  `]
})
export class HeroComponent {
  configService = inject(ConfigService);
}
