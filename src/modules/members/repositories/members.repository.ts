import { Member } from '@/shared/entities/Member';
import { MemberDto } from '../dto/member.dto';

export abstract class IMembersRepository {
  abstract create(data: MemberDto, church_id: string): Promise<Member | void>;
  // abstract update(data: MemberDto, member_id: string): Promise<void>;
  // abstract delete(data: MemberDto, member_id: string): Promise<void>;
  // abstract get(data: MemberDto): Promise<Member>;
}
