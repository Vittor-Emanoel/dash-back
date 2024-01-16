import { PartialType } from '@nestjs/swagger';
import { CreateShepherdDto } from './create-shepherd.dto';

export class UpdateShepherdDto extends PartialType(CreateShepherdDto) {}
