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

    return user;
  },
);
