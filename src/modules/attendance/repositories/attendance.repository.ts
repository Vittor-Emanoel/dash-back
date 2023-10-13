import { Attendance } from 'src/shared/models/Attendance';
import { CreateAttendanceDto } from '../dto/create-attendance.dto';
import { UpdateAttendanceDto } from '../dto/update-attendance.dto';

export abstract class IAttendanceRepository {
  abstract findUnique(id: string): Promise<Attendance | null>;
  abstract findAll(): Promise<Attendance[] | null>;
  abstract create(data: CreateAttendanceDto): Promise<Attendance>;
  abstract update(id: string, data: UpdateAttendanceDto): Promise<Attendance>;
  abstract delete(id: string): Promise<Attendance>;
}
