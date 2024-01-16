import { IsString } from 'class-validator';

export class CreateShepherdDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
