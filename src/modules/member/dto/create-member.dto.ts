import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone: string;

  @IsString()
  @IsNotEmpty()
  churchId: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  houseNumber: string;

  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @IsString()
  @IsNotEmpty()
  officeId: string;

  @IsString()
  shepherd_id: string;
}
