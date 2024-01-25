import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChurchDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  userId: string; // pastor
}
