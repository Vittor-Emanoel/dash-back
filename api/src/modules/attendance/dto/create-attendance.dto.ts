import { IsString, IsUUID, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateAttendanceDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  memberId: string;
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  eventId: string;
  @IsBoolean()
  @IsNotEmpty()
  present: boolean;
}
