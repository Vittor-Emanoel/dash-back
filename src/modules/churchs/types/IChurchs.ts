import { Member } from '@prisma/client';
import { IAddress } from './IAddress';
import { IOwner } from './IOwner';

export interface IChurch {
  name: string;
  description: string | null;
  address: IAddress[] | null;
  id: string;
  owner: IOwner | null;
  members: Member[];
}
