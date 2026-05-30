import { Injectable, signal } from '@angular/core';
import { RestaurantConfig } from '../../models/restaurant-config.model';
import { BBQNIGHTS_CONFIG } from '../../clients/bbqnights.config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSignal = signal<RestaurantConfig>(BBQNIGHTS_CONFIG);

  get config() {
    return this.configSignal();
  }

  setConfig(config: RestaurantConfig) {
    this.configSignal.set(config);
  }
}
