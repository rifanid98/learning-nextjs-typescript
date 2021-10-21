import { GetServerSideProps } from 'next';
import Layout from '../components/layout';
import { Post } from '../../domain/post';

interface BlogProps {
  posts: Array<Post>
}

const Blog = (props: BlogProps) => {
  const { posts } = props;
  return (
    <Layout pageTitle="Blog Page">
      <div>Blog Page</div>
      <div>
        {posts?.map((post) => (
          <div key={post.id}>
            <p>
              {post.title}
              {' '}
              {post.body}
            </p>
            <br />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Array<Post> = await response.json();

  return {
    props: {
      posts,
    },
  };
};
