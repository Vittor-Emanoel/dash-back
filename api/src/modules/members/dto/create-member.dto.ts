import {
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateMemberDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsPhoneNumber('BR')
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  churchId: string;

  @IsString()
  street: string;

  @IsString()
  houseNumber: string;

  @IsString()
  postalCode: string;

  @IsString()
  officesId: string;
}
