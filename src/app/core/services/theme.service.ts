import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeConfig } from '../../models/restaurant-config.model';
import { THEME_PRESETS } from '../../models/theme-presets';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  applyTheme(theme: ThemeConfig) {
    if (isPlatformBrowser(this.platformId)) {
      let finalTheme = { ...theme };

      if (theme.preset && THEME_PRESETS[theme.preset]) {
        finalTheme = { ...THEME_PRESETS[theme.preset], ...theme } as ThemeConfig;
      }

      const root = document.documentElement;
      root.style.setProperty('--primary-color', finalTheme.primaryColor);
      root.style.setProperty('--secondary-color', finalTheme.secondaryColor);
      root.style.setProperty('--bg-color', finalTheme.backgroundColor);
      root.style.setProperty('--text-color', finalTheme.textColor);
      root.style.setProperty('--font-family', finalTheme.fontFamily);

      document.body.style.fontFamily = finalTheme.fontFamily;
    }
  }
}
