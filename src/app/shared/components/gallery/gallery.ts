import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="gallery" class="py-5">
      <div class="container text-center">
        <h2 class="mb-5 display-4 fw-bold" [style.color]="configService.config.theme.primaryColor">Gallery</h2>
        <div class="row g-3">
          <div class="col-md-4" *ngFor="let i of [1,2,3,4,5,6]">
            <div class="gallery-item overflow-hidden rounded shadow-sm">
               <img [src]="'https://picsum.photos/seed/' + configService.config.id + i + '/600/400'" class="img-fluid" alt="Gallery image">
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-item img {
      transition: transform 0.5s ease;
      cursor: pointer;
    }
    .gallery-item:hover img {
      transform: scale(1.1);
    }
  `]
})
export class GalleryComponent {
  configService = inject(ConfigService);
}
