import { Injectable, signal } from '@angular/core';
import { RestaurantConfig } from '../../models/restaurant-config.model';
import { RESTAURANT_REGISTRY, DEFAULT_RESTAURANT_ID } from '../../clients/registry';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSignal = signal<RestaurantConfig>(RESTAURANT_REGISTRY[DEFAULT_RESTAURANT_ID]);

  constructor() {
    this.detectClient();
  }

  private detectClient() {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      // Multi-tenant logic: Map hostnames to restaurant IDs
      // Example: 'pizza.myapp.com' -> 'pizza-paradise'
      const clientMap: Record<string, string> = {
        'pizza.local': 'pizza-paradise',
        'burger.local': 'burger-bastion',
        'coffee.local': 'bean-haven',
        'moon.local': 'moon-platters'
      };

      const clientId = clientMap[hostname];
      if (clientId && RESTAURANT_REGISTRY[clientId]) {
        this.loadRestaurant(clientId);
      }
    }
  }

  get config() {
    return this.configSignal();
  }

  get availableRestaurants() {
    return Object.values(RESTAURANT_REGISTRY).map(config => ({
      id: config.id,
      name: config.name,
      businessType: config.businessType
    }));
  }

  setConfig(config: RestaurantConfig) {
    this.configSignal.set(config);
  }

  loadRestaurant(id: string) {
    const config = RESTAURANT_REGISTRY[id];
    if (config) {
      this.setConfig(config);
    }
  }
}
