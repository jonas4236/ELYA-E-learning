import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { slugifyLib } from 'src/utils/slugify.util';

@Injectable()
export class TagsService {
  constructor(private readonly databaseSerive: DatabaseService) {}

  create(data: Prisma.tagsCreateInput) {
    data.tag_slug = slugifyLib(data.tag_name);
    return this.databaseSerive.tags.create({ data });
  }

  findAll() {
    return this.databaseSerive.tags.findMany({});
  }

  findOne(id: number) {
    return this.databaseSerive.tags.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.tagsUpdateInput) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
