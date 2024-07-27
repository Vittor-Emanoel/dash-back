import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RolesDto } from './dto/roles.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: RolesDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  get() {
    return this.rolesService.get();
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(@Body() createRoleDto: RolesDto, @Param() role_id: string) {
    return this.rolesService.update(createRoleDto, role_id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param() role_id: string) {
    return this.rolesService.delete(role_id);
  }
}
