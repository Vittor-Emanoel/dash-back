import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { CreateOrganizationUseCase } from './usecases/create-organization.usecase';
import { GetOrganizationUseCase } from './usecases/get-organization.usecase';

@Controller('organizations')
export class OrganizationController {
  constructor(
    private readonly createOrganizationUseCase: CreateOrganizationUseCase,
    private readonly getOrganizationUseCase: GetOrganizationUseCase,
  ) {}

  @Get()
  @HttpCode(200)
  findAll() {
    return this.getOrganizationUseCase.execute();
  }

  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.createOrganizationUseCase.execute(createOrganizationDto);
  }
}
