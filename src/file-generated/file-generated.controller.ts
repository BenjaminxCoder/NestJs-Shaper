import { Controller, Get } from '@nestjs/common';
import { FileGeneratedService } from './file-generated.service';

@Controller('file-generated')
export class FileGeneratedController {
  constructor(private readonly fileGeneratedService: FileGeneratedService) {}

  @Get()
  findAll() {
    return this.fileGeneratedService.getData();
  }
}
