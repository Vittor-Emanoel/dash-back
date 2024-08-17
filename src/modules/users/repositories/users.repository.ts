
export abstract class IUsersRepository {
  abstract me(userId: string): Promise<{
    id: string;
    name: string;
    email: string;
} | null>;
}
