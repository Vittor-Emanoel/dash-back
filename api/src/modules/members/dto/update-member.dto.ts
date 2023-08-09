import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateMemberDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone: string;
}
