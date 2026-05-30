import { Component, inject, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { HeroComponent } from '../../shared/components/hero/hero';
import { MenuComponent } from '../../shared/components/menu/menu';
import { AboutComponent } from '../../shared/components/about/about';
import { GalleryComponent } from '../../shared/components/gallery/gallery';
import { ContactComponent } from '../../shared/components/contact/contact';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials';
import { SpecialOffersComponent } from '../../shared/components/special-offers/special-offers';
import { WhyChooseUsComponent } from '../../shared/components/why-choose-us/why-choose-us';
import { OpeningHoursComponent } from '../../shared/components/opening-hours/opening-hours';
import { FeaturedProductsComponent } from '../../shared/components/featured-products/featured-products';
import { GoogleMapsComponent } from '../../shared/components/google-maps/google-maps';
import { FaqComponent } from '../../shared/components/faq/faq';
import { ReservationCTAComponent, WhatsAppCTAComponent } from '../../shared/components/ctas/ctas';

import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';
import { Section } from '../../models/restaurant-config.model';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    MenuComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    TestimonialsComponent,
    SpecialOffersComponent,
    WhyChooseUsComponent,
    OpeningHoursComponent,
    FeaturedProductsComponent,
    GoogleMapsComponent,
    FaqComponent,
    ReservationCTAComponent,
    WhatsAppCTAComponent
  ],
  template: `
    <div class="main-layout">
      <app-navbar></app-navbar>

      <main>
        <ng-container *ngFor="let section of activeSections">
          <app-hero *ngIf="section.type === 'Hero'"></app-hero>
          <app-about *ngIf="section.type === 'About'"></app-about>
          <app-menu *ngIf="section.type === 'Menu'"></app-menu>
          <app-gallery *ngIf="section.type === 'Gallery'"></app-gallery>
          <app-testimonials *ngIf="section.type === 'Testimonials'"></app-testimonials>
          <app-contact *ngIf="section.type === 'Contact'"></app-contact>
          <app-special-offers *ngIf="section.type === 'SpecialOffers'"></app-special-offers>
          <app-why-choose-us *ngIf="section.type === 'WhyChooseUs'"></app-why-choose-us>
          <app-opening-hours *ngIf="section.type === 'OpeningHours'"></app-opening-hours>
          <app-featured-products *ngIf="section.type === 'FeaturedProducts'"></app-featured-products>
          <app-google-maps *ngIf="section.type === 'GoogleMaps'"></app-google-maps>
          <app-faq *ngIf="section.type === 'FAQ'"></app-faq>
          <app-reservation-cta *ngIf="section.type === 'ReservationCTA'"></app-reservation-cta>
          <app-whatsapp-cta *ngIf="section.type === 'WhatsAppCTA'"></app-whatsapp-cta>
          <app-footer *ngIf="section.type === 'Footer'"></app-footer>
        </ng-container>
      </main>

      <!-- Theme Switcher for Demo Purposes -->
      <div class="theme-switcher position-fixed bottom-0 start-0 m-3 p-3 bg-white rounded shadow-lg d-flex flex-column gap-2" style="z-index: 1050; max-height: 80vh; overflow-y: auto;">
        <h6 class="mb-2 fw-bold border-bottom pb-2">Onboarded Businesses</h6>
        <button
          *ngFor="let restaurant of configService.availableRestaurants"
          class="btn btn-sm text-start"
          [class.btn-primary]="configService.config.id === restaurant.id"
          [class.btn-outline-secondary]="configService.config.id !== restaurant.id"
          (click)="switchConfig(restaurant.id)">
          {{ restaurant.name }} ({{ restaurant.businessType }})
        </button>
      </div>
    </div>
  `,
  styles: [`
    .theme-switcher {
      opacity: 0.8;
      transition: opacity 0.3s;
      width: 250px;
    }
    .theme-switcher:hover {
      opacity: 1;
    }
  `]
})
export class MainLayoutComponent implements OnInit {
  configService = inject(ConfigService);
  themeService = inject(ThemeService);

  get activeSections(): Section[] {
    return this.configService.config.sections
      .filter(s => s.enabled)
      .sort((a, b) => a.order - b.order);
  }

  constructor() {
    effect(() => {
      this.themeService.applyTheme(this.configService.config.theme);
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    this.themeService.applyTheme(this.configService.config.theme);
  }

  switchConfig(restaurantId: string) {
    this.configService.loadRestaurant(restaurantId);
  }
}
