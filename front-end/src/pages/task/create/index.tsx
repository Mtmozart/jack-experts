import { TaskCard } from '../../../components/task-card/TaskCard';
import styles from './styles.module.scss';
export function CreateScreen() {
  return (
    <section className={styles.container__task}>
      <TaskCard
        userId={''}
        title={''}
        description={''}
        limitDate={''}
        status={'created'}
        color={'Red'}
      />
    </section>
  );
}
