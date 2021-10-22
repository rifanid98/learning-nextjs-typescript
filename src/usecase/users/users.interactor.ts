import { User } from 'domain/entity/user';
import { UsersRepository } from 'domain/repository/users.repository';
import UsersRestRepository from 'infrastructure/persistence/server/rest/users.rest.repository';
import { UsersUsecase } from './users.usecase';

class UsersInteractor implements UsersUsecase {
  private static instance?: UsersInteractor = null;

  private repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new UsersInteractor(UsersRestRepository.getInstance());
      return this.instance;
    }

    return this.instance;
  }

  async getAllUsers(): Promise<Array<User>> {
    return this.repository.getAllUsers();
  }

  async getUser(id: number): Promise<User> {
    return this.repository.getUser(id);
  }
}

export default UsersInteractor;
