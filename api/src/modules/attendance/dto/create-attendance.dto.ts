import { IsString, IsUUID } from 'class-validator';

export class CreateAttendanceDto {
  @IsString()
  @IsUUID()
  memberId: string;

  @IsString()
  @IsUUID()
  eventId: string;

  @IsString()
  attendanceStatus: string;
}
