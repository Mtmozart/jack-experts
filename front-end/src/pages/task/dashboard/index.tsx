import { Link } from 'react-router-dom';
import { useAuthProvider } from '../../../context/Auth';
import styles from './styles.module.scss';
import { FaPlus } from 'react-icons/fa6';
import { TaskCard } from '../../../components/task-card/TaskCard';
import SearchTaskForm from '../../../components/pages/search';

export default function DashBoardScreen() {
  const { currentUser } = useAuthProvider();

  return (
    <>
      {currentUser ? (
        <section className={styles.task__container__task}>
          <section className={styles.task__container__task__content}>
            <h1>Dashboard</h1>
            <div className={styles.task__container__task__to__create}>
              <Link to="/create-task">
                Adicionar task <FaPlus size={18} />
              </Link>
            </div>
            <div className={styles.container__task__your__tasks}>
              <h2>Pesquise suas tasks:</h2>
            </div>
            <div className={styles.container__search__form}>
              <SearchTaskForm />
            </div>
          </section>
        </section>
      ) : (
        <h1>Usuário sem permissão</h1>
      )}
    </>
  );
}
