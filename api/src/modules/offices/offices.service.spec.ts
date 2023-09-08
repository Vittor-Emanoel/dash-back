import { Test, TestingModule } from '@nestjs/testing';
import { OfficesService } from './offices.service';

describe('OfficesService', () => {
  let service: OfficesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfficesService],
    }).compile();

    service = module.get<OfficesService>(OfficesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
