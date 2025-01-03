import { Test, TestingModule } from '@nestjs/testing';
import { CourseVideoController } from './course_video.controller';
import { CourseVideoService } from './course_video.service';

describe('CourseVideoController', () => {
  let controller: CourseVideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseVideoController],
      providers: [CourseVideoService],
    }).compile();

    controller = module.get<CourseVideoController>(CourseVideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
