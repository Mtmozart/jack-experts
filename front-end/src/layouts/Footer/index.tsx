import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <div className={styles.container__footer}>
      <p>
        Desenvolvido por{' '}
        <Link to={'https://www.linkedin.com/in/matheus-mozart-borges'}>
          Matheus Mozart
        </Link>{' '}
        &copy; <span>2024</span>
      </p>
    </div>
  );
}
