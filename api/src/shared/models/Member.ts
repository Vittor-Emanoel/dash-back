import { Attendance } from './Attendance';

export class Member {
  readonly id: string;
  readonly fullName: string;
  readonly phone: string;
  readonly churchId: string;
  readonly street: string;
  readonly houseNumber: string;
  readonly officeId: string;
  readonly postalCode: string;

  constructor(
    id: string,
    fullName: string,
    phone: string,
    churchId: string,
    street: string,
    houseNumber: string,
    officeId: string,
    postalCode: string,
  ) {
    this.id = id;
    this.fullName = fullName;
    this.phone = phone;
    this.churchId = churchId;
    this.street = street;
    this.houseNumber = houseNumber;
    this.officeId = officeId;
    this.postalCode = postalCode;
  }
}
