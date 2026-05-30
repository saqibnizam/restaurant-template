import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';
import { BURGER_CONFIG } from '../../clients/burger.config';
import { PIZZA_CONFIG } from '../../clients/pizza.config';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default config as Pizza Paradise', () => {
    expect(service.config.id).toBe('pizza-paradise');
  });

  it('should update config', () => {
    service.setConfig({ ...BURGER_CONFIG, id: 'test' });
    expect(service.config.id).toBe('test');
  });

  it('should load restaurant from registry', () => {
    service.loadRestaurant('burger-bastion');
    expect(service.config.id).toBe('burger-bastion');
    expect(service.config.name).toBe('Burger Bastion');
  });
});
