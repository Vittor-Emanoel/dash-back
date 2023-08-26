import { Test, TestingModule } from '@nestjs/testing';
import { ChurchsController } from './churchs.controller';
import { ChurchsService } from './churchs.service';

describe('ChurchsController', () => {
  let controller: ChurchsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChurchsController],
      providers: [ChurchsService],
    }).compile();

    controller = module.get<ChurchsController>(ChurchsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
