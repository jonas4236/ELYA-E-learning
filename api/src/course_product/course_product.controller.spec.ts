import { Test, TestingModule } from '@nestjs/testing';
import { CourseProductController } from './course_product.controller';
import { CourseProductService } from './course_product.service';

describe('CourseProductController', () => {
  let controller: CourseProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseProductController],
      providers: [CourseProductService],
    }).compile();

    controller = module.get<CourseProductController>(CourseProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
