import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAttendenceDto {
  @IsString()
  @IsNotEmpty()
  memberId: string;

  @IsString()
  @IsNotEmpty()
  eventId: string;

  @IsString()
  attendanceStatus: string;
}
