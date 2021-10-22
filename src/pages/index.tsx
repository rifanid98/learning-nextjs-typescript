import type { NextPage } from 'next';
import Image from 'next/image';
import styles from 'styles/Home.module.css';
import Layout from 'components/layout';

const Home: NextPage = () => (
  <>
    <Layout pageTitle="Home Page">
      <Image src="/Profile.jpg" width={200} height={240} alt="profile" />
      <h1 className={styles['title-homepage']}>Hello World</h1>
    </Layout>
  </>
);

export default Home;
