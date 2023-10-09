export class Attendance {
  readonly id: string;
  readonly memberId: string;
  readonly eventId: string;
  readonly attendanceStatus: string;

  constructor(
    id: string,
    memberId: string,
    eventId: string,
    attendanceStatus: string,
  ) {
    this.id = id;
    this.memberId = memberId;
    this.eventId = eventId;
    this.attendanceStatus = attendanceStatus;
  }
}
