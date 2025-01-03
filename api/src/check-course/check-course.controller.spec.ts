import { Test, TestingModule } from '@nestjs/testing';
import { CheckCourseController } from './check-course.controller';
import { CheckCourseService } from './check-course.service';

describe('CheckCourseController', () => {
  let controller: CheckCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckCourseController],
      providers: [CheckCourseService],
    }).compile();

    controller = module.get<CheckCourseController>(CheckCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
