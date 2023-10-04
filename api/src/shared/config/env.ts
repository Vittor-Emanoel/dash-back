import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, NotEquals, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  dbURL: string;

  @IsString()
  @IsNotEmpty()
  @NotEquals('unsecure_jwt_secret')
  jwtSecret: string;
}

const DATABASE_URL = 'postgresql://root:root@localhost:5432/adm?schema=public';
const JWT_SECRET = 'wadkawdiawjidjawidjawijdwiajdiwajd';

export const env: Env = plainToInstance(Env, {
  dbURL: DATABASE_URL,
  jwtSecret: JWT_SECRET,
});

const errors = validateSync(env);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
