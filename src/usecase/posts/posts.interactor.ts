import { PostsUsecase } from './posts.usecase';
import { PostsRepository } from '../../domain/repository/posts.repository';
import PostsRestRepository from '../../infrastructure/persistence/server/rest/posts.rest.repository';
import { Post } from '../../domain/entity/post';

class PostsInteractor implements PostsUsecase {
  private static instance?: PostsInteractor = null;

  private repository: PostsRepository;

  constructor(repository: PostsRepository) {
    this.repository = repository;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new PostsInteractor(PostsRestRepository.getInstance());
      return this.instance;
    }

    return this.instance;
  }

  async getAllPosts(): Promise<Array<Post>> {
    return this.repository.getAllPosts();
  }
}

export default PostsInteractor;
