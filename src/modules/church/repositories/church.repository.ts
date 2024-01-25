import { ChurchCreated } from '../dto/church.dto';
import { CreateChurchDto } from '../dto/create-church.dto';
import { UpdateChurchDto } from '../dto/update-church.dto';

export abstract class IChurchRepository {
  abstract findUnique(id: string): Promise<ChurchCreated | null>;
  abstract findAll(): Promise<ChurchCreated[] | null>;
  abstract create(data: CreateChurchDto): Promise<ChurchCreated>;
  abstract update(id: string, data: UpdateChurchDto): Promise<ChurchCreated>;
  abstract delete(id: string): Promise<ChurchCreated>;
}
