import { ActiveUserId } from '@/shared/decorators/active-userId.decorator';
import { ZodPipe } from '@/shared/pipes/ZodPipe';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common';
import {
  createOrganization,
  CreateOrganizationDto,
} from './dto/organization.dto';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @UsePipes(new ZodPipe(createOrganization))
  @HttpCode(HttpStatus.OK)
  create(
    @Body() createOrganizationDto: CreateOrganizationDto,
    @ActiveUserId() owner_id: string,
  ) {
    return this.organizationsService.create(createOrganizationDto, owner_id);
  }
}
