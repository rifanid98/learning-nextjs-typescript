import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { User } from '../../../domain/entity/user';
import UsersInteractor from '../../../usecase/users/users.interactor';

interface UsersProps {
  users: Array<User>
}

const Users = (props: UsersProps) => {
  const { users } = props;
  const router = useRouter();

  const onClick = (id: number) => {
    router.push(`/users/${id}`);
  };

  return (
    <Layout pageTitle="Users Page">
      <div>
        {users?.map((user) => (
          <div key={user.email}>
            <p>
              {user.name}
              {' '}
              {user.email}
            </p>
            <button type="submit" onClick={() => onClick(user.id)}>Detail User</button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Users;

export const getStaticProps: GetStaticProps = async () => {
  const users = await UsersInteractor.getInstance().getAllUsers();

  return {
    props: {
      users,
    },
  };
};
