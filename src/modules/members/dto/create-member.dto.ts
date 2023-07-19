import { IsNotEmpty, IsPhoneNumber, IsString, IsUUID } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  church_Id: string;
}
