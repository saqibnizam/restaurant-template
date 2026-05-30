# Multi-Restaurant Configuration Driven Platform

This project is a high-end, configuration-driven multi-restaurant platform built with Angular 19, Bootstrap 5, and SCSS. It supports dynamic branding, theming, and content delivery for multiple restaurant clients through a single unified codebase.

## 🚀 Key Features

- **Configuration Driven:** Entire UI (colors, logos, content, menus, images) is controlled by a single TypeScript configuration file per restaurant.
- **Dynamic Theming:** Uses CSS variables mapped to Angular Signals to switch themes instantly without page reloads.
- **Responsive Design:** Professional, mobile-first UI with glassmorphism effects and modern layouts.
- **Multi-Brand Support:** Easily onboard new restaurants by creating a new config file.

## 📁 Architecture

- `src/app/core/`: Services for configuration management and theming.
- `src/app/shared/`: Reusable standalone components (Navbar, Hero, Footer, etc.).
- `src/app/clients/`: Restaurant-specific configuration files.
- `src/app/models/`: Strongly typed interfaces for the configuration schema.

## 🛠️ Onboarding a New Restaurant

To add a new restaurant to the platform:

1. **Create a Configuration:**
   Add a new file in `src/app/clients/your-restaurant.config.ts` following the `RestaurantConfig` interface.

2. **Register the Configuration:**
   Add your new configuration to the `ConfigService` in `src/app/core/services/config.service.ts`.

3. **Assets:**
   Add logos and images to the `public/assets/` directory (or use external URLs).

## 💻 Development

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npx ng serve
```

### Run Tests
```bash
npx ng test --watch=false
```

### Visual Verification
Run the Playwright script to generate screenshots across all brands and breakpoints:
```bash
python3 verify_full_fixed.py
```
Check the `verification/screenshots/` directory for results.
