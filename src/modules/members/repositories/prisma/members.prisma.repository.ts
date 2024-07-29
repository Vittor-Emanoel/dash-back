import { PrismaService } from '@/shared/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { MemberDto } from '../../dto/member.dto';
import { IMembersRepository } from '../members.repository';

@Injectable()
export class MembersRepository implements IMembersRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create({ fullName, phone }: MemberDto, church_id: string) {
    console.log(church_id);

    await this.prisma.member.create({
      data: {
        fullName,
        phone,
        church_id,
      },
    });
  }
}
