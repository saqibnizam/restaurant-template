import { Component, inject, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { HeroComponent } from '../../shared/components/hero/hero';
import { MenuComponent } from '../../shared/components/menu/menu';
import { GalleryComponent } from '../../shared/components/gallery/gallery';
import { ContactComponent } from '../../shared/components/contact/contact';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials';
import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    MenuComponent,
    GalleryComponent,
    ContactComponent,
    TestimonialsComponent
  ],
  template: `
    <div class="main-layout">
      <app-navbar></app-navbar>

      <main>
        <app-hero *ngIf="configService.config.features.showHero"></app-hero>
        <app-menu *ngIf="configService.config.features.showMenu"></app-menu>
        <app-gallery *ngIf="configService.config.features.showGallery"></app-gallery>
        <app-testimonials *ngIf="configService.config.features.showTestimonials"></app-testimonials>
        <app-contact *ngIf="configService.config.features.showContact"></app-contact>
      </main>

      <app-footer></app-footer>

      <!-- Theme Switcher for Demo Purposes -->
      <div class="theme-switcher position-fixed bottom-0 start-0 m-3 p-2 bg-white rounded shadow-lg d-flex gap-2" style="z-index: 1050;">
        <button class="btn btn-sm btn-outline-primary" (click)="switchConfig('aquafair')">AquaFair</button>
        <button class="btn btn-sm btn-outline-danger" (click)="switchConfig('pizzahub')">PizzaHub</button>
        <button class="btn btn-sm btn-outline-dark" (click)="switchConfig('bbqnights')">BBQNights</button>
      </div>
    </div>
  `,
  styles: [`
    .theme-switcher {
      opacity: 0.5;
      transition: opacity 0.3s;
    }
    .theme-switcher:hover {
      opacity: 1;
    }
  `]
})
export class MainLayoutComponent implements OnInit {
  configService = inject(ConfigService);
  themeService = inject(ThemeService);

  constructor() {
    // Reactively apply theme when config changes
    effect(() => {
      this.themeService.applyTheme(this.configService.config.theme);
    });
  }

  ngOnInit(): void {
    this.themeService.applyTheme(this.configService.config.theme);
  }

  switchConfig(restaurantId: string) {
    if (restaurantId === 'aquafair') {
      import('../../clients/aquafair.config').then(m => this.configService.setConfig(m.AQUAFAIR_CONFIG));
    } else if (restaurantId === 'pizzahub') {
      import('../../clients/pizzahub.config').then(m => this.configService.setConfig(m.PIZZAHUB_CONFIG));
    } else if (restaurantId === 'bbqnights') {
      import('../../clients/bbqnights.config').then(m => this.configService.setConfig(m.BBQNIGHTS_CONFIG));
    }
  }
}
