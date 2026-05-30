import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg sticky-top shadow-sm py-3" [style.background-color]="configService.config.theme.backgroundColor">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img [src]="configService.config.logo" [alt]="configService.config.name" height="40" class="me-2 rounded-circle border border-2 shadow-sm" [style.border-color]="configService.config.theme.primaryColor">
          <span [style.color]="configService.config.theme.primaryColor" class="fw-bold fs-4 tracking-tighter">{{ configService.config.name }}</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item" *ngIf="configService.config.features.showHero">
              <a class="nav-link px-3" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="#about">About</a>
            </li>
            <li class="nav-item" *ngIf="configService.config.features.showMenu">
              <a class="nav-link px-3" href="#menu">Menu</a>
            </li>
            <li class="nav-item" *ngIf="configService.config.features.showGallery">
              <a class="nav-link px-3" href="#gallery">Gallery</a>
            </li>
            <li class="nav-item" *ngIf="configService.config.features.showContact">
              <a class="nav-link px-3" href="#contact">Contact</a>
            </li>
            <li class="nav-item ms-lg-3">
              <a href="#contact" class="btn btn-sm rounded-pill px-4 py-2 text-white shadow-sm" [style.background-color]="configService.config.theme.primaryColor">Reserve Now</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }
    .tracking-tighter { letter-spacing: -0.05rem; }
    .nav-link {
      font-weight: 500;
      transition: color 0.3s ease;
      color: var(--text-color);
    }
    .nav-link:hover {
      color: var(--primary-color) !important;
    }
  `]
})
export class NavbarComponent {
  configService = inject(ConfigService);
}
