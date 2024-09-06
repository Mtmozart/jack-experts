import { useState } from 'react';
import { favoriteTask } from '../../services/task.service';
import styles from './style.module.scss';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { toastMessage } from '../../helpers/messages';

interface FavoriteButtonProps {
  id: string | undefined;
  initialFavoriteStatus: boolean;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  id,
  initialFavoriteStatus,
}) => {
  const [isFavorite, setIsFavorite] = useState(initialFavoriteStatus);
  const [requesting, setRequesting] = useState<boolean>(false);

  const handleToggleFavorite = async () => {
    if (requesting) {
      toast.warn(toastMessage.REQUESTING);
      return;
    }
    if (!id) {
      toast.warn(toastMessage.INTERNAL_SERVER_ERROR);
      return;
    }
    try {
      const newStatus = await favoriteTask(id);
      setIsFavorite(newStatus);
      toast.success('Requisição feita sucesso.');
    } catch (error: any) {
      const message = error.message;
      toast.error(message);
      console.error('Erro ao favoritar a task', error);
    } finally {
      setRequesting(false);
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={styles.button}
      aria-label={
        isFavorite ? 'Remover das favoritas' : 'Adicionar as favoritas'
      }
    >
      {isFavorite ? (
        <AiFillHeart size={30} color="red" />
      ) : (
        <AiOutlineHeart size={30} color="red" />
      )}
    </button>
  );
};
