import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-5" [style.background-color]="configService.config.theme.backgroundColor">
      <div class="container py-lg-5 text-center">
        <h6 class="text-uppercase fw-bold mb-3 tracking-widest" [style.color]="configService.config.theme.primaryColor">Testimonials</h6>
        <h2 class="display-4 fw-bold mb-5">Voices of Satisfaction</h2>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let i of [1,2,3]">
            <div class="testimonial-card card border-0 shadow-sm p-5 h-100 transition-hover rounded-4">
              <div class="quote-icon mb-4 fs-1 opacity-25" [style.color]="configService.config.theme.primaryColor">
                <i class="bi bi-quote"></i>
              </div>
              <p class="mb-4 text-muted fs-5">
                {{ getTestimonial(i).text }}
              </p>
              <div class="d-flex align-items-center justify-content-center gap-3 mt-auto">
                <img [src]="'https://i.pravatar.cc/150?u=' + i" class="rounded-circle shadow-sm" width="50" height="50" alt="Customer">
                <div class="text-start">
                  <h6 class="fw-bold mb-0">{{ getTestimonial(i).name }}</h6>
                  <div class="text-warning small">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tracking-widest { letter-spacing: 0.2rem; }
    .transition-hover { transition: all 0.3s ease; }
    .transition-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 1rem 3rem rgba(0,0,0,0.08) !important;
    }
  `]
})
export class TestimonialsComponent {
  configService = inject(ConfigService);

  getTestimonial(i: number) {
    const testimonials = [
      { name: "Sarah Johnson", text: "The atmosphere was incredible and the food was even better. Truly a five-star experience that I'll be recommending to everyone!" },
      { name: "Michael Chen", text: "I've visited many restaurants in the city, but this one stands out for its authentic flavors and impeccable service." },
      { name: "Emily Rodriguez", text: "From the first bite to the last, everything was perfect. The attention to detail in every dish is just remarkable." }
    ];
    return testimonials[i-1];
  }
}
