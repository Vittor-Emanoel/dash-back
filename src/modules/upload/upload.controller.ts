import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { FileDTO } from './dto/upload.dto';

@IsPublic()
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: FileDTO) {
    const result = await this.uploadService.upload(file);

    return result;
  }
}