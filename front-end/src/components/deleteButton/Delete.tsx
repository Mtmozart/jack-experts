import { useState } from 'react';
import { deleteTask, favoriteTask } from '../../services/task.service';
import styles from './style.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { toastMessage } from '../../helpers/messages';
import { useNavigate } from 'react-router-dom';

interface RemoveTaskProps {
  id: string | undefined;
}

export const DeleteButton: React.FC<RemoveTaskProps> = ({ id }) => {
  const [requesting, setRequesting] = useState<boolean>(false);
  const navigate = useNavigate();
  const removeTask = async () => {
    if (requesting) {
      toast.warn(toastMessage.REQUESTING);
      return;
    }
    if (!id) {
      toast.warn(toastMessage.INTERNAL_SERVER_ERROR);
      return;
    }
    try {
      await deleteTask(id);
      toast.success('Task deletada com sucesso.');
      navigate(0);
    } catch (error: any) {
      const message = error.message;
      toast.error(message);
      console.error('Erro ao deletar a task', error);
    } finally {
      setRequesting(false);
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
