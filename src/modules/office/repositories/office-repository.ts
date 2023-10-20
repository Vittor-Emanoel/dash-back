import { CreateOfficeDto } from '../dto/create-office.dto';
import { Office } from '../dto/office.dto';
import { UpdateOfficeDto } from '../dto/update-office.dto';

export abstract class IOfficeRepository {
  abstract findUnique(id: string): Promise<Office | null>;
  abstract findAll(): Promise<Office[] | null>;
  abstract create(data: CreateOfficeDto): Promise<Office>;
  abstract update(id: string, data: UpdateOfficeDto): Promise<Office>;
  abstract delete(id: string): Promise<Office>;
}
