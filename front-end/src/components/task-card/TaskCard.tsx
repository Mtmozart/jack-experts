import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { AiFillEdit, AiFillHeart, AiOutlineClose } from 'react-icons/ai';
import { ITask } from '../../interfaces/task';
import formatDate from '../../utils/formatDate';
import { statusConversionToPortuguese } from '../../utils/statusConversionToPortuguese';

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
            <Link to={`/edit-task/${task}`}>
              <AiFillEdit size={27} color="blue" />
            </Link>
            <Link to={`/edit-task/${task}`}>
              <AiOutlineClose size={30} color="red" />
            </Link>
            <Link to={`/edit-task/${task}`}>
              <AiFillHeart color="red" />
            </Link>
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
