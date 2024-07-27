import { ActiveUserId } from '@/shared/decorators/active-userId.decorator';
import { ZodPipe } from '@/shared/pipes/ZodPipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { OrganizationDto, organizationSchema } from './dto/organization.dto';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @UsePipes(new ZodPipe(organizationSchema))
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() createOrganizationDto: OrganizationDto,
    @ActiveUserId() owner_id: string,
  ) {
    return this.organizationsService.create(createOrganizationDto, owner_id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  get(@ActiveUserId() owner_id: string) {
    return this.organizationsService.get(owner_id);
  }

  @Put()
  @HttpCode(HttpStatus.NO_CONTENT)
  update(
    @Body() createOrganizationDto: OrganizationDto,
    @ActiveUserId() owner_id: string,
  ) {
    return this.organizationsService.update(createOrganizationDto, owner_id);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@ActiveUserId() owner_id: string) {
    return this.organizationsService.delete(owner_id);
  }
}
