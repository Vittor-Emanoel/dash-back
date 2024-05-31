import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChurchDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  own_id: string; // pastor
}
