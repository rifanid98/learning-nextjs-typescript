import { User } from '../entity/user';

export interface UsersRepository {
  getAllUsers(): Promise<Array<User>>
  getUser(id: number): Promise<User>
}
