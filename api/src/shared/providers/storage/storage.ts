import { FileDTO } from 'src/modules/users/dto/users.dto';

export abstract class IStorage {
  abstract upload(file: FileDTO, folder: string): Promise<any>;
}
