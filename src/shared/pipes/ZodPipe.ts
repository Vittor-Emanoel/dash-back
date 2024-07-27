import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ZodPipe implements PipeTransform {
  constructor(private readonly schema: any) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'body') {
      this.schema.parse(value);
    }
    return value;
  }
}
