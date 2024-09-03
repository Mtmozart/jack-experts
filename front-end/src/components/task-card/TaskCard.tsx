import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { AiFillEdit, AiFillHeart, AiOutlineClose } from 'react-icons/ai';
import { ITaskCreate } from '../../interfaces/task';
import { FaSearch } from 'react-icons/fa';

export function TaskCard(task: ITaskCreate) {
  //const limitDateFormatted = formatDate(task.limitDate);

  return (
    <section className={styles.container__task}>
      <div className={styles.card_task}>
        <div className={styles.task__content__top}>
          <h3 className={styles.title}>
            <strong>Título: </strong> Tendências de Desenvolvimento Web para 2024: O Que Esperar <br />
            {task.title}
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
          O desenvolvimento web moderno envolve uma combinação de tecnologias para criar sites e aplicativos responsivos. Ferramentas como HTML, CSS e JavaScript são essenciais. Além disso, frameworks como React e Angular ajudam a construir interfaces dinâmicas e interativas.
        </p>
        <p className={styles.limitDate}>
          <strong>Data: </strong> 'data'
        </p>
        <p className={styles.limitDate}>
          <strong>status: </strong> STATUS ALEATÓRIO.
        </p>
      </div>
    </section>
  );
}
