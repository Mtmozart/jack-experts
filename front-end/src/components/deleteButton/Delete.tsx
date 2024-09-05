import { deleteTask, favoriteTask } from '../../services/task.service';
import styles from './style.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

interface RemoveTaskProps {
  id: string | undefined;
}

export const DeleteButton: React.FC<RemoveTaskProps> = ({ id }) => {
  const removeTask = async () => {
    if (!id) {
      console.log('Task ID is missing.');
      return;
    }
    try {
      await deleteTask(id);
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  };

  return (
    <button
      onClick={removeTask}
      className={styles.button}
      aria-label={'Deletar task'}
    >
      <AiOutlineClose size={30} color="red" />
    </button>
  );
};
