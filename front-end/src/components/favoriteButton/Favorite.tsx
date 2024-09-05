import { useState, useEffect } from 'react';
import { favoriteTask } from '../../services/task.service';
import styles from './style.module.scss';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface FavoriteButtonProps {
  id: string | undefined;
  initialFavoriteStatus: boolean;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  id,
  initialFavoriteStatus,
}) => {
  const [isFavorite, setIsFavorite] = useState(initialFavoriteStatus);

  const handleToggleFavorite = async () => {
    if (!id) {
      console.log('Task ID is missing.');
      return;
    }
    try {
      const newStatus = await favoriteTask(id);
      setIsFavorite(newStatus);
    } catch (error) {
      console.error('Error updating favorite status:', error);
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
