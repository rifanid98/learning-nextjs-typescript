import { PostsRepository } from '../../../../domain/repository/posts.repository';
import { Post } from '../../../../domain/entity/post';
import RestConstant from '../../../../common/constant/rest.constant';

class PostsRestRepository implements PostsRepository {
  private static instance?: PostsRepository = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new PostsRestRepository();
      return this.instance;
    }

    return this.instance;
  }

  getAllPosts = async (): Promise<Array<Post>> => {
    const response = await fetch(RestConstant.githubApi.getAllPosts);
    return response.json();
  };
}

export default PostsRestRepository;
