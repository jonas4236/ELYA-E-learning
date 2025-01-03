import { Test, TestingModule } from '@nestjs/testing';
import { CourseSectionController } from './course_section.controller';
import { CourseSectionService } from './course_section.service';

describe('CourseSectionController', () => {
  let controller: CourseSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseSectionController],
      providers: [CourseSectionService],
    }).compile();

    controller = module.get<CourseSectionController>(CourseSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
