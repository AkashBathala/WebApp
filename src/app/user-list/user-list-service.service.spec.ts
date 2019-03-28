import { TestBed } from '@angular/core/testing';

import { UserListServiceService } from './user-list-service.service';

describe('UserListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserListServiceService = TestBed.get(UserListServiceService);
    expect(service).toBeTruthy();
  });
});
