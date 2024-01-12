import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const VerifyRole = createParamDecorator<undefined>(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.userId;

    if (!user) {
      throw new UnauthorizedException();
    }

    const { sub: id, name, email, role } = user;

    return { id, name, email, role };
  },
);
