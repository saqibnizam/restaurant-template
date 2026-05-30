import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg sticky-top shadow-sm" [style.background-color]="configService.config.theme.backgroundColor">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <span [style.color]="configService.config.theme.primaryColor" class="fw-bold fs-4">{{ configService.config.name }}</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" *ngIf="configService.config.features.showHero">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item" *ngIf="configService.config.features.showMenu">
              <a class="nav-link" href="#menu">Menu</a>
            </li>
            <li class="nav-item" *ngIf="configService.config.features.showGallery">
              <a class="nav-link" href="#gallery">Gallery</a>
            </li>
            <li class="nav-item" *ngIf="configService.config.features.showContact">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link {
      font-weight: 500;
      transition: color 0.3s ease;
      color: var(--text-color);
    }
    .nav-link:hover {
      color: var(--primary-color);
    }
  `]
})
export class NavbarComponent {
  configService = inject(ConfigService);
}
