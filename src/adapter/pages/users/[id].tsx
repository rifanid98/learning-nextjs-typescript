import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Layout from '../../components/layout';
import { User } from '../../../domain/user';

interface UserDetailProps {
  user: User
}

const UserDetail = (props: UserDetailProps) => {
  const { user } = props;
  // gunakan user?.name jika fallback = true

  return (
    <Layout pageTitle="User Detail">
      <div>
        User Detail Page
        {' '}
        <p>{user.name}</p>
        {' '}
        <p>{user.email}</p>
        {' '}
        <p>{user.phone}</p>
        {' '}
        <p>{user.website}</p>
      </div>
    </Layout>
  );
};

export default UserDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: Array<User> = await response.json();

  const paths = users.map((user) => ({
    params: {
      id: user.id?.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context?.params?.id}`);
  const user: User = await response.json();

  return {
    props: {
      user,
    },
  };
};
