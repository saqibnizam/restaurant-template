import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  template: `
    <section id="googlemaps" class="w-100" style="height: 450px;">
      <iframe
        *ngIf="configService.config.contact.googleMapsUrl"
        [src]="configService.config.contact.googleMapsUrl | safeUrl"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  `
})
export class GoogleMapsComponent {
  configService = inject(ConfigService);
}

// Note: Need a SafeUrl pipe or bypassSecurityTrustResourceUrl
