import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-5" [style.background-color]="configService.config.theme.secondaryColor + '10'">
      <div class="container text-center">
        <h2 class="mb-5 display-4 fw-bold" [style.color]="configService.config.theme.primaryColor">What Our Clients Say</h2>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let i of [1,2,3]">
            <div class="card border-0 shadow-sm p-4 h-100">
              <p class="fst-italic mb-3">"Amazing food and great service! Will definitely come back."</p>
              <h6 class="fw-bold mb-0">- Happy Customer {{ i }}</h6>
              <div class="text-warning mt-2">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  configService = inject(ConfigService);
}
