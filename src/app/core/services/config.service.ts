import { Injectable, signal } from '@angular/core';
import { RestaurantConfig } from '../../models/restaurant-config.model';
import { RESTAURANT_REGISTRY, DEFAULT_RESTAURANT_ID } from '../../clients/registry';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSignal = signal<RestaurantConfig>(RESTAURANT_REGISTRY[DEFAULT_RESTAURANT_ID]);

  get config() {
    return this.configSignal();
  }

  get availableRestaurants() {
    return Object.keys(RESTAURANT_REGISTRY).map(key => ({
      id: key,
      name: RESTAURANT_REGISTRY[key].name
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
