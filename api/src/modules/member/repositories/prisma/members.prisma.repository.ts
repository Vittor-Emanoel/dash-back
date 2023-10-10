import { Injectable } from '@nestjs/common';
import { IMembersRepository } from '../members.repository';
import { PrismaService } from 'src/shared/database/prisma.service';
import { Member } from 'src/shared/models/Member';
import { CreateMemberDto } from '../../dto/create-member.dto';

@Injectable()
export class MembersRepository implements IMembersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Member[]> {
    const members = await this.prisma.member.findMany({
      select: {
        id: true,
        fullName: true,
        phone: true,
        street: true,
        houseNumber: true,
        postalCode: true,
        church: {
          select: {
            id: true,
            name: true,
          },
        },
        office: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return members;
  }

  async findUnique(id: string): Promise<Member> {
    const member = await this.prisma.member.findUnique({
      where: { id },
    });

    return member;
  }

  async create(data: CreateMemberDto): Promise<Member> {
    const member = await this.prisma.member.create({
      data,
    });

    return member;
  }

  async delete(id: string): Promise<Member> {
    const member = await this.prisma.member.delete({
      where: { id },
    });

    return member;
  }

  async update(id: string, data: CreateMemberDto): Promise<Member> {
    const member = await this.prisma.member.update({
      where: { id },
      data,
    });

    return member;
  }
}
