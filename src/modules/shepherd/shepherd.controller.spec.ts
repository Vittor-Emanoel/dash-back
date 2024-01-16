import { Test, TestingModule } from '@nestjs/testing';
import { ShepherdController } from './shepherd.controller';
import { ShepherdService } from './shepherd.service';

describe('ShepherdController', () => {
  let controller: ShepherdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShepherdController],
      providers: [ShepherdService],
    }).compile();

    controller = module.get<ShepherdController>(ShepherdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
