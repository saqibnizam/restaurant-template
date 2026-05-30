import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeConfig } from '../../models/restaurant-config.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  applyTheme(theme: ThemeConfig) {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', theme.primaryColor);
      root.style.setProperty('--secondary-color', theme.secondaryColor);
      root.style.setProperty('--bg-color', theme.backgroundColor);
      root.style.setProperty('--text-color', theme.textColor);
      root.style.setProperty('--font-family', theme.fontFamily);

      document.body.style.fontFamily = theme.fontFamily;
    }
  }
}
