import { useEffect, useState } from 'react';
import {
  findTaskAllCount,
  findTaskByFavorite,
  findTaskByStatus,
} from '../../../services/task.service';
import styles from './styles.module.scss';

interface cardProps {
  id: string;
}
export default function TaskDataCountScreen({ id }: cardProps) {
  const [totalCount, setTotalCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  type StatusCounts = {
    created: number;
    pending: number;
    in_progress: number;
    completed: number;
    cancelled: number;
  };

  const [statusCounts, setStatusCounts] = useState<StatusCounts>({
    created: 0,
    pending: 0,
    in_progress: 0,
    completed: 0,
    cancelled: 0,
  });

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;

      try {
        const totalResponse = await findTaskAllCount(id);
        setTotalCount(totalResponse);
        const favoriteResponse = await findTaskByFavorite(id);
        setFavoriteCount(favoriteResponse);
        const taskStatus: Array<keyof StatusCounts> = [
          'created',
          'pending',
          'in_progress',
          'completed',
          'cancelled',
        ];

        const tempStatusCounts: StatusCounts = {
          created: 0,
          pending: 0,
          in_progress: 0,
          completed: 0,
          cancelled: 0,
        };

        for (const status of taskStatus) {
          const response: number = await findTaskByStatus(status, id);
          tempStatusCounts[status] = response;
        }

        setStatusCounts(tempStatusCounts);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    loadData();
  }, [id]);
  return (
    <>
      <div className={styles.task__data__container}>
        <div className={styles.item__group__top}>
          <div>
            <h4>Total</h4>
            <span>{totalCount}</span>
          </div>
          <div>
            <h4>Favoritas</h4>
            <span>{favoriteCount}</span>
          </div>
        </div>
        <div className={styles.item__group__bottom}>
          <div>
            <h4>Criadas</h4>
            <span>{statusCounts.created}</span>
          </div>
          <div>
            <h4>Pendentes</h4>
            <span>{statusCounts.pending}</span>
          </div>
          <div>
            <h4>Em progresso</h4>
            <span>{statusCounts.in_progress}</span>
          </div>
          <div>
            <h4>Concluídas</h4>
            <span>{statusCounts.completed}</span>
          </div>
          <div>
            <h4>Canceladas</h4>
            <span>{statusCounts.cancelled}</span>
          </div>
        </div>
      </div>
    </>
  );
}
