import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  date: Date;
  @IsString()
  @IsUUID()
  church_Id: string;
}
