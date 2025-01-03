import { Test, TestingModule } from '@nestjs/testing';
import { CategoryCourseController } from './category-course.controller';
import { CategoryCourseService } from './category-course.service';

describe('CategoryCourseController', () => {
  let controller: CategoryCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryCourseController],
      providers: [CategoryCourseService],
    }).compile();

    controller = module.get<CategoryCourseController>(CategoryCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
