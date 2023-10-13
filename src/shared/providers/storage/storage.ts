import { FileDTO } from 'src/modules/user/dto/users.dto';

export abstract class IStorage {
  abstract upload(file: FileDTO, folder: string): Promise<any>;
}
