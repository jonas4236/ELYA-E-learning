import { Test, TestingModule } from '@nestjs/testing';
import { TagCourseService } from './tag-course.service';

describe('TagCourseService', () => {
  let service: TagCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagCourseService],
    }).compile();

    service = module.get<TagCourseService>(TagCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
