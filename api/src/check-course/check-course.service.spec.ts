import { Test, TestingModule } from '@nestjs/testing';
import { CheckCourseService } from './check-course.service';

describe('CheckCourseService', () => {
  let service: CheckCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckCourseService],
    }).compile();

    service = module.get<CheckCourseService>(CheckCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
