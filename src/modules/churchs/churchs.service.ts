import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IOrganizationsRepository } from '../organizations/repositories/organizations.repository';
import { ChurchDto } from './dto/churchs.dto';
import { IChurchsRepository } from './repositories/churchs.repository';

@Injectable()
export class ChurchsService {
  constructor(
    private readonly churchsRepository: IChurchsRepository,
    private readonly organizationRepository: IOrganizationsRepository,
  ) {}

  async create({ name, address, description }: ChurchDto, owner_id: string) {
    const organizationAssociatedAnUser =
      await this.organizationRepository.findByOwner(owner_id);

    if (!organizationAssociatedAnUser) {
      throw new NotFoundException(
        'Is not already exists organization associated an user',
      );
    }

    const organization_Id = organizationAssociatedAnUser.id;

    const churchAlreadyExists = await this.churchsRepository.findByName(name);

    if (churchAlreadyExists) {
      throw new ConflictException('Church already exists');
    }

    const church = await this.churchsRepository.create(
      {
        name,
        address,
        description,
      },
      organization_Id,
      owner_id,
    );

    return church;
  }

  async get(owner_id: string) {
    const church = await this.churchsRepository.get(owner_id);

    return church;
  }
}
