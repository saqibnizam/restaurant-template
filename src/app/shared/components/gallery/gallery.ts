import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="gallery" class="py-5 bg-light">
      <div class="container py-lg-5 text-center">
        <h6 class="text-uppercase fw-bold mb-3 tracking-widest" [style.color]="configService.config.theme.primaryColor">Visual Feast</h6>
        <h2 class="display-4 fw-bold mb-5">Our Culinary Gallery</h2>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let i of [1,2,3,4,5,6]">
            <div class="gallery-item overflow-hidden rounded-4 shadow-sm position-relative">
               <div class="ratio ratio-4x3">
                 <img [src]="'https://picsum.photos/seed/' + configService.config.id + i + '/800/600'" class="img-fluid object-fit-cover" alt="Gallery image">
               </div>
               <div class="gallery-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center opacity-0 transition-all">
                  <i class="bi bi-search text-white fs-1"></i>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tracking-widest { letter-spacing: 0.2rem; }
    .gallery-item img {
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }
    .gallery-item:hover img {
      transform: scale(1.15);
    }
    .gallery-overlay {
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.4);
      cursor: pointer;
    }
    .gallery-item:hover .gallery-overlay {
      opacity: 1 !important;
    }
    .transition-all { transition: all 0.3s ease; }
    .object-fit-cover { object-fit: cover; }
  `]
})
export class GalleryComponent {
  configService = inject(ConfigService);
}
