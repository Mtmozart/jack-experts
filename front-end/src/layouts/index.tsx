import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  return (
    <div>
      <Header />
      <main className={styles.container__main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
