import { Church } from '@prisma/client';
import { ChurchDto } from '../dto/churchs.dto';
import { IChurch } from '../types/IChurchs';

export abstract class IChurchsRepository {
  abstract create(
    data: ChurchDto,
    organization_Id: string,
    owner_id: string,
  ): Promise<Church>;
  abstract findByName(church_name: string): Promise<Church | null>;
  abstract get(owner_id: string): Promise<IChurch[]>;
  // abstract update(data: ChurchDto, owner_id: string): Promise<Church>;
  // abstract delete(church_id: string): Promise<Church | null>;
}
