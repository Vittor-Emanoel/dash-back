import { Church } from '../dto/church.dto';
import { CreateChurchDto } from '../dto/create-church.dto';
import { UpdateChurchDto } from '../dto/update-church.dto';

export abstract class IChurchRepository {
  abstract findUnique(id: string): Promise<Church | null>;
  abstract findAll(): Promise<Church[] | null>;
  abstract create(data: CreateChurchDto): Promise<Church>;
  abstract update(id: string, data: UpdateChurchDto): Promise<Church>;
  abstract delete(id: string): Promise<Church>;
}
