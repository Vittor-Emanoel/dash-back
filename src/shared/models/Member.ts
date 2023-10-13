import { Church } from './Church';
import { Office } from './Office';

export class Member {
  readonly id: string;
  readonly fullName: string;
  readonly phone: string;
  readonly street: string;
  readonly houseNumber: string;
  readonly postalCode: string;
  readonly churchId?: string;
  readonly officeId?: string;
  readonly church?: Church;
  readonly office?: Office;

  constructor(
    id: string,
    fullName: string,
    phone: string,
    street: string,
    houseNumber: string,
    postalCode: string,
    officeId?: string,
    churchId?: string,
    church?: Church,
    office?: Office,
  ) {
    this.id = id;
    this.fullName = fullName;
    this.phone = phone;
    this.churchId = churchId;
    this.street = street;
    this.houseNumber = houseNumber;
    this.officeId = officeId;
    this.postalCode = postalCode;
    this.church = church;
    this.office = office;
  }
}
