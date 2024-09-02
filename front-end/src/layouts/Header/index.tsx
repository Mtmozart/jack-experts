import { useState } from 'react';
import styles from './styles.module.scss';
import { FaAlignJustify } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthProvider } from '../../context/Auth';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const { currentUser, logout } = useAuthProvider();

  const toggleIcon = () => {
    setIsVisible(!isVisible);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={styles.header__container}>
      <nav className={styles.nav__container}>
        <section className={styles.nav__container__logo}>
          <Link to="/">To do Tasks</Link>
        </section>
        <section className={styles.nav__container__toggle} onClick={toggleIcon}>
          {isVisible ? <FaTimes /> : <FaAlignJustify />}
        </section>

        <ul
          className={`${styles.nav__container__list} ${isVisible ? styles.show : ''}`}
        >
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          {currentUser ? (
            <>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
              <li>
                <Link to="/tasks">Tasks</Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className={styles.logout__button}
                >
                  Sair
                </button>
              </li>
            </>
          ) : (
            <li className={styles.login__button}>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
