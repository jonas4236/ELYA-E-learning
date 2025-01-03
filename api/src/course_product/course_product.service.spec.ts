import { Test, TestingModule } from '@nestjs/testing';
import { CourseProductService } from './course_product.service';

describe('CourseProductService', () => {
  let service: CourseProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseProductService],
    }).compile();

    service = module.get<CourseProductService>(CourseProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
