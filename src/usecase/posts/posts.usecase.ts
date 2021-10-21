import { Post } from '../../domain/entity/post';

export interface PostsUsecase {
  getAllPosts(): Promise<Array<Post>>
}
