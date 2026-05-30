import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-5" [style.background-color]="configService.config.theme.backgroundColor">
      <div class="container py-lg-5">
        <div class="text-center mb-5">
          <h6 class="text-uppercase fw-bold mb-2" [style.color]="configService.config.theme.primaryColor">Favorites</h6>
          <h2 class="display-4 fw-bold" [style.color]="configService.config.theme.textColor">Featured Products</h2>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6" *ngFor="let item of featuredItems">
            <div class="card h-100 border-0 shadow-sm overflow-hidden text-center p-3 rounded-4">
              <div class="ratio ratio-1x1 mb-3">
                <img [src]="item.image" class="rounded-circle object-fit-cover shadow-sm" [alt]="item.name" loading="lazy">
              </div>
              <h5 class="fw-bold mb-2">{{ item.name }}</h5>
              <p class="text-muted small mb-3">{{ item.description }}</p>
              <div class="fw-bold fs-4 mb-3" [style.color]="configService.config.theme.primaryColor">
                {{ item.price || (item.variants && item.variants[0].price) }}
              </div>
              <button class="btn rounded-pill px-4" [style.background-color]="configService.config.theme.primaryColor" style="color: white">
                {{ configService.config.menu.ctaText || 'Order Now' }}
              </button>
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
export class FeaturedProductsComponent {
  configService = inject(ConfigService);

  get featuredItems() {
    return this.configService.config.menu.items.filter(item => item.isFeatured).slice(0, 4);
  }
}
