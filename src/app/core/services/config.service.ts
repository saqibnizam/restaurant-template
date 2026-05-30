import { Injectable, signal } from '@angular/core';
import { RestaurantConfig } from '../../models/restaurant-config.model';
import { AQUAFAIR_CONFIG } from '../../clients/aquafair.config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSignal = signal<RestaurantConfig>(AQUAFAIR_CONFIG);

  get config() {
    return this.configSignal();
  }

  setConfig(config: RestaurantConfig) {
    this.configSignal.set(config);
  }
}
