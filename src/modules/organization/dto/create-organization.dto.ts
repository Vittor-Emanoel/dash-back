import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CreateChurchDto } from 'src/modules/church/dto/create-church.dto';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  crn: string; // cnpj

  @IsString()
  @IsNotEmpty()
  own_id: string;

  @IsArray()
  church?: CreateChurchDto[];
}
