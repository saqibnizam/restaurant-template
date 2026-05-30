import { RestaurantConfig } from '../models/restaurant-config.model';
import { AQUAFAIR_CONFIG } from './aquafair.config';
import { BBQNIGHTS_CONFIG } from './bbqnights.config';
import { PIZZAHUB_CONFIG } from './pizzahub.config';

export const RESTAURANT_REGISTRY: Record<string, RestaurantConfig> = {
  aquafair: AQUAFAIR_CONFIG,
  bbqnights: BBQNIGHTS_CONFIG,
  pizzahub: PIZZAHUB_CONFIG,
};

export const DEFAULT_RESTAURANT_ID = 'aquafair';
