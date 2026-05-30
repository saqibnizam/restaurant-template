import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="menu" class="py-5" [style.background-color]="configService.config.theme.backgroundColor">
      <div class="container">
        <h2 class="text-center mb-5 display-4 fw-bold" [style.color]="configService.config.theme.primaryColor">Our Menu</h2>

        <div *ngFor="let category of configService.config.menu.categories" class="mb-5">
          <h3 class="mb-4 pb-2 border-bottom fw-bold" [style.color]="configService.config.theme.secondaryColor">{{ category }}</h3>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6" *ngFor="let item of getItemsByCategory(category)">
              <div class="card h-100 border-0 shadow-sm transition-hover overflow-hidden">
                <div class="ratio ratio-1x1" *ngIf="item.image">
                   <img [src]="item.image" class="card-img-top object-fit-cover" [alt]="item.name" loading="lazy">
                </div>
                <div class="card-body d-flex flex-column">
                  <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title fw-bold mb-0">{{ item.name }}</h5>
                    <span class="fw-bold" *ngIf="item.price" [style.color]="configService.config.theme.primaryColor">{{ item.price }}</span>
                  </div>
                  <p class="card-text text-muted small flex-grow-1">{{ item.description }}</p>

                  <div class="variants mt-2 mb-3" *ngIf="item.variants?.length">
                    <div *ngFor="let variant of item.variants" class="d-flex justify-content-between small text-muted border-bottom py-1">
                      <span>{{ variant.label }}</span>
                      <span class="fw-bold" [style.color]="configService.config.theme.primaryColor">{{ variant.price }}</span>
                    </div>
                  </div>

                  <button class="btn btn-sm mt-auto align-self-start" [style.background-color]="configService.config.theme.primaryColor" style="color: white">
                    {{ configService.config.menu.ctaText || 'Order Now' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .transition-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .transition-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
    }
    .object-fit-cover {
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .transition-hover:hover .object-fit-cover {
      transform: scale(1.05);
    }
  `]
})
export class MenuComponent {
  configService = inject(ConfigService);

  getItemsByCategory(category: string) {
    return this.configService.config.menu.items.filter(item => item.category === category);
  }
}
