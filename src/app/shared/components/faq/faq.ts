import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-5 bg-light">
      <div class="container py-lg-5">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" [style.color]="configService.config.theme.textColor">Frequently Asked Questions</h2>
          <p class="text-muted">Everything you need to know about our services</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="accordion accordion-flush shadow-sm rounded-4 overflow-hidden" id="faqAccordion">
              <div class="accordion-item" *ngFor="let item of configService.config.faq; let i = index">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed fw-bold py-3" type="button"
                          [attr.data-bs-toggle]="'collapse'"
                          [attr.data-bs-target]="'#faq-' + i">
                    {{ item.question }}
                  </button>
                </h3>
                <div [id]="'faq-' + i" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-muted py-3">
                    {{ item.answer }}
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
    .accordion-button:not(.collapsed) {
      background-color: transparent;
      color: inherit;
    }
    .accordion-button:focus {
      box-shadow: none;
      border-color: rgba(0,0,0,.125);
    }
  `]
})
export class FaqComponent {
  configService = inject(ConfigService);
}
