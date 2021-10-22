import { User } from 'domain/entity/user';

export interface UsersRepository {
  getAllUsers(): Promise<Array<User>>
  getUser(id: number): Promise<User>
}
