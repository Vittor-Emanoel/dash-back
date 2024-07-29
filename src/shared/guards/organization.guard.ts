import { OrganizationsService } from '@/modules/organizations/organizations.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class OrganizationGuard implements CanActivate {
  constructor(private readonly organizationService: OrganizationsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { sub: userId } = request.userId;

    const organizationId = await this.organizationService.get(userId);

    //REGRA -> SO VAI EXISTIR UMA ORGANIZACAO!!
    request.organizationId = organizationId[0].id;

    return true;
  }
}
