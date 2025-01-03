import { Test, TestingModule } from '@nestjs/testing';
import { TagCourseController } from './tag-course.controller';
import { TagCourseService } from './tag-course.service';

describe('TagCourseController', () => {
  let controller: TagCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagCourseController],
      providers: [TagCourseService],
    }).compile();

    controller = module.get<TagCourseController>(TagCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
