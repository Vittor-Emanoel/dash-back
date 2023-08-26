import { IsString } from 'class-validator';
import { Role } from 'src/shared/decorators/roles.decorators';

export class UpdateUserDto {
  @IsString()
  role: Role;
}
