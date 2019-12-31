import { TestBed } from '@angular/core/testing';

import { VkApiService } from './vk-api.service';

describe('VkApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VkApiService = TestBed.get(VkApiService);
    expect(service).toBeTruthy();
  });
});
