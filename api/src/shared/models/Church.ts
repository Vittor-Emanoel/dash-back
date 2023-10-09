import { Member } from './Member';

export class Church {
  readonly id: string;
  readonly name: string;
  readonly shepherd: string;
  readonly members?: Array<Member>;

  constructor(
    id: string,
    name: string,
    shepherd: string,
    members: Array<Member>,
  ) {
    this.id = id;
    this.name = name;
    this.shepherd = shepherd;
    this.members = members;
  }
}
