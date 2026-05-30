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
            <div class="col-md-6" *ngFor="let item of getItemsByCategory(category)">
              <div class="card h-100 border-0 shadow-sm transition-hover">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 class="card-title fw-bold mb-1">{{ item.name }}</h5>
                    <p class="card-text text-muted small">{{ item.description }}</p>
                  </div>
                  <span class="fs-5 fw-bold" [style.color]="configService.config.theme.primaryColor">{{ item.price }}</span>
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
      transition: transform 0.3s ease;
    }
    .transition-hover:hover {
      transform: translateY(-5px);
    }
  `]
})
export class MenuComponent {
  configService = inject(ConfigService);

  getItemsByCategory(category: string) {
    return this.configService.config.menu.items.filter(item => item.category === category);
  }
}
