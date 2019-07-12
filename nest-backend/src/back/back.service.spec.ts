import { Test, TestingModule } from '@nestjs/testing';
import { BackService } from './back.service';

describe('BackService', () => {
  let service: BackService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackService],
    }).compile();
    service = module.get<BackService>(BackService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
