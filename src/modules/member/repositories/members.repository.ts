import { Member } from 'src/shared/types/member';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';

export abstract class IMembersRepository {
  abstract findUnique(id: string): Promise<Member | null>;
  abstract find(id: string): Promise<Member[]>;
  abstract findById(id: string): Promise<Member | null>;
  abstract findAll(): Promise<Member[]>;
  abstract create(data: CreateMemberDto): Promise<Member>;
  abstract update(id: string, data: UpdateMemberDto): Promise<Member>;
  abstract delete(id: string): Promise<Member>;
}
