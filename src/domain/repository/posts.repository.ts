import { Post } from '../entity/post';

export interface PostsRepository {
  getAllPosts(): Promise<Array<Post>>
}
