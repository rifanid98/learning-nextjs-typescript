import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Layout from '../../components/layout';
import { User } from '../../domain/entity/user';
import UsersInteractor from '../../usecase/users/users.interactor';

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
  const users = await UsersInteractor.getInstance().getAllUsers();

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
  const id = context?.params?.id ?? 1;
  const user = await UsersInteractor.getInstance().getUser(Number(id));

  return {
    props: {
      user,
    },
  };
};
