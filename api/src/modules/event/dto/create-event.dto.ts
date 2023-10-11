import { IsDate, IsISO8601, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  name: string;

  date: Date;
}
