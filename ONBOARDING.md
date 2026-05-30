# Onboarding a New Client

This guide explains how to onboard a new business onto the platform. The system is designed to be 100% configuration-driven.

## Step 1: Create a Configuration File

Create a new file in `src/app/clients/[client-id].config.ts`. You can copy an existing config like `pizza.config.ts` as a template.

### Configuration Structure:
- **id**: Unique identifier for the client.
- **name**: Business name.
- **businessType**: Category (e.g., 'Pizza Restaurant', 'Platter House').
- **logo**: URL to the business logo.
- **theme**: Color palette and font selection.
- **contact**: Address, phone, email, and social links.
- **sections**: Define which UI components are enabled and their display order.

## Step 2: Register the Client

Open `src/app/clients/registry.ts` and perform the following:

1. Import your new config:
   ```typescript
   import { MOON_PLATTERS_CONFIG } from './moon-platters.config';
   ```
2. Add it to the `RESTAURANT_REGISTRY` object:
   ```typescript
   export const RESTAURANT_REGISTRY: Record<string, RestaurantConfig> = {
     // ... other clients
     [MOON_PLATTERS_CONFIG.id]: MOON_PLATTERS_CONFIG
   };
   ```

## Step 3: Deploy

- **Development**: The new client will automatically appear in the demo "Onboarded Businesses" switcher.
- **Production**: Map the client's domain to the platform's hosting. The `ConfigService` will detect the `window.location.hostname` and load the correct configuration.

## Verification

Run the automated screenshot suite to verify the new client's UI:
```bash
npx playwright test
```
