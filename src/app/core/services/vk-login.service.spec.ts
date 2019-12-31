import { TestBed } from '@angular/core/testing';

import { VkLoginService } from './vk-login.service';

describe('VkLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VkLoginService = TestBed.get(VkLoginService);
    expect(service).toBeTruthy();
  });
});
