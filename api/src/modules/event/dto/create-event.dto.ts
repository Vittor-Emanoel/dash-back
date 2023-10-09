import { IsArray, IsDate, IsString } from 'class-validator';
import { Attendance } from 'src/shared/models/Attendance';

export class CreateEventDto {
  @IsString()
  name: string;

  date: Date;

  Attendances?: Array<Attendance>;
}
