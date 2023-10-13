import { Attendance } from './Attendance';

export class Event {
  readonly id: string;
  readonly name: string;
  readonly date: Date;
  readonly attendances?: Attendance[];

  constructor(id: string, name: string, date: Date, attendances: Attendance[]) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.attendances = attendances;
  }
}
