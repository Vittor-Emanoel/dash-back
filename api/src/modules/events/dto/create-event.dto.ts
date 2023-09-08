import { IsDate, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  name: string;

  @IsDate()
  date: Date;
}
