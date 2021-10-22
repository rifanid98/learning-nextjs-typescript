import { Post } from 'domain/entity/post';

export interface PostsRepository {
  getAllPosts(): Promise<Array<Post>>
}
