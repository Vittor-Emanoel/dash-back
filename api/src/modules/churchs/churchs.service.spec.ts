import { Test, TestingModule } from '@nestjs/testing';
import { ChurchsService } from './churchs.service';

describe('ChurchsService', () => {
  let service: ChurchsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChurchsService],
    }).compile();

    service = module.get<ChurchsService>(ChurchsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
