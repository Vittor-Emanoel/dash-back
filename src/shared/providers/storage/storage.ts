import { FileDTO } from 'src/modules/admin/dto';

export abstract class IStorage {
  abstract upload(file: FileDTO, folder: string): Promise<any>;
}
