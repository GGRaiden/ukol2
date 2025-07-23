import { ReactElement } from 'react';
import style from './Home.module.css';

const Home = (): ReactElement => (
  <>
    <h1 className={style.title}>Welcome, medior!</h1>
    <p className={style.paragraph}>Read carefully README.md!</p>
  </>
);

export default Home;
