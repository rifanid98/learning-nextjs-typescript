import { User } from '../../domain/entity/user';

export interface UsersUsecase {
  getAllUsers(): Promise<Array<User>>
  getUser(id: number): Promise<User>
}
