import { PIZZA_CONFIG } from './pizza.config';
import { BURGER_CONFIG } from './burger.config';
import { COFFEE_CONFIG } from './coffee-shop.config';
import { JUICE_CONFIG } from './juice-bar.config';
import { BAKERY_CONFIG } from './bakery.config';
import { HOTEL_CONFIG } from './hotel-restaurant.config';
import { BBQ_CONFIG } from './bbq.config';
import { ICE_CREAM_CONFIG } from './ice-cream.config';
import { FINE_DINING_CONFIG } from './fine-dining.config';
import { FAMILY_CONFIG } from './family-restaurant.config';
import { FAST_FOOD_CONFIG } from './fast-food.config';
import { MOON_PLATTERS_CONFIG } from './moon-platters.config';
import { RestaurantConfig } from '../models/restaurant-config.model';

export const RESTAURANT_REGISTRY: Record<string, RestaurantConfig> = {
  [PIZZA_CONFIG.id]: PIZZA_CONFIG,
  [BURGER_CONFIG.id]: BURGER_CONFIG,
  [COFFEE_CONFIG.id]: COFFEE_CONFIG,
  [JUICE_CONFIG.id]: JUICE_CONFIG,
  [BAKERY_CONFIG.id]: BAKERY_CONFIG,
  [HOTEL_CONFIG.id]: HOTEL_CONFIG,
  [BBQ_CONFIG.id]: BBQ_CONFIG,
  [ICE_CREAM_CONFIG.id]: ICE_CREAM_CONFIG,
  [FINE_DINING_CONFIG.id]: FINE_DINING_CONFIG,
  [FAMILY_CONFIG.id]: FAMILY_CONFIG,
  [FAST_FOOD_CONFIG.id]: FAST_FOOD_CONFIG,
  [MOON_PLATTERS_CONFIG.id]: MOON_PLATTERS_CONFIG
};

export const DEFAULT_RESTAURANT_ID = PIZZA_CONFIG.id;
