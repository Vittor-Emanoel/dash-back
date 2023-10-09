import { Test, TestingModule } from '@nestjs/testing';
import { OfficesController } from './offices.controller';
import { OfficesService } from './offices.service';

describe('OfficesController', () => {
  let controller: OfficesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfficesController],
      providers: [OfficesService],
    }).compile();

    controller = module.get<OfficesController>(OfficesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
