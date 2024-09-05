import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { AiFillEdit, AiFillHeart, AiOutlineClose } from 'react-icons/ai';
import { ITask } from '../../interfaces/task';
import formatDate from '../../utils/formatDate';
import { statusConversionToPortuguese } from '../../utils/statusConversionToPortuguese';
import { FavoriteButton } from '../favoriteButton/Favorite';
import { DeleteButton } from '../deleteButton/Delete';

export function TaskCard(task: ITask) {
  const limitDateFormatted = formatDate(task.limitDate);
  const portugueseStatus = statusConversionToPortuguese(task.status);

  return (
    <div
      className={styles.container__task}
      style={{ backgroundColor: task.color }}
    >
      <div className={styles.card_task}>
        <div className={styles.task__content__top}>
          <h3 className={styles.title}>
            <strong>Título: </strong> {task.title} <br />
          </h3>
          <div className={styles.header}>
            <Link to={`/update-task/${task.id}`}>
              <AiFillEdit size={27} color="blue" />
            </Link>
            <FavoriteButton
              id={task.id}
              initialFavoriteStatus={task.favorite}
            />
            <DeleteButton id={task.id} />
          </div>
        </div>
        <p className={styles.description}>
          <strong>Descrição:</strong> <br />
          {task.description}
        </p>
        <p className={styles.limitDate}>
          <strong>Data: </strong> {limitDateFormatted}
        </p>
        <p className={styles.limitDate}>
          <strong>status: </strong> {portugueseStatus}
        </p>
      </div>
    </div>
  );
}
