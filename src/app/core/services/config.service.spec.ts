import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';
import { BBQNIGHTS_CONFIG } from '../../clients/bbqnights.config';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default config as BBQNights', () => {
    expect(service.config.id).toBe('bbqnights');
  });

  it('should update config', () => {
    service.setConfig({ ...BBQNIGHTS_CONFIG, id: 'test' });
    expect(service.config.id).toBe('test');
  });
});
