import { UsersRepository } from '../../../../domain/repository/users.repository';
import { User } from '../../../../domain/entity/user';
import RestConstant from '../../../../common/constant/rest.constant';

class UsersRestRepository implements UsersRepository {
  private static instance?: UsersRepository = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new UsersRestRepository();
      return this.instance;
    }

    return this.instance;
  }

  getAllUsers = async (): Promise<Array<User>> => {
    const response = await fetch(RestConstant.githubApi.getAllUsers);
    return response.json();
  };

  getUser = async (id: number): Promise<User> => {
    const response = await fetch(`${RestConstant.githubApi.getUser}/${id}`);
    return response.json();
  };
}

export default UsersRestRepository;
