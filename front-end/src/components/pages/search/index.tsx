import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './style.module.scss';
import { useAuthProvider } from '../../../context/Auth';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchemaSearch } from '../../../validators/task.validator';
import { FormFieldConstructor } from '../../common/Form/form';
import { SelectInput } from '../../common/Select/SelectInput';
import { TaskStatus } from '../../../pages/task/create/TaskInfo/Status';
import { TaskSearchOrder } from './util/TaskSearchOrder';
import { TaskSearchBy } from './util/TaskSearchBy';
import { TaskInfosSearchInterface } from './step/taskInfo';
import { conversionToSearchTaskDataApi } from '../../../utils/dataConversionTask';
import { searchTask } from '../../../services/task.service';
import { ITask } from '../../../interfaces/task';
import { TaskCard } from '../../task-card/TaskCard';

export default function SearchTaskForm() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const { currentUser } = useAuthProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<TaskInfosSearchInterface>({
    resolver: zodResolver(taskSchemaSearch),
    mode: 'onBlur',
  });

  async function onSubmit(data: TaskInfosSearchInterface) {
    const dataApi = conversionToSearchTaskDataApi(data);
    const tasks = await searchTask(dataApi, currentUser?.id);
    setTasks(tasks);
  }

  const FormField = FormFieldConstructor<TaskInfosSearchInterface>();

  return (
    <section className={styles.search__form__container}>
      <div className={styles.search__form__container__form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="título"
            register={register}
            setError={setError}
            error={errors?.título}
            inputProps={{
              type: 'text',
              placeholder: 'Título',
            }}
          />
          <FormField
            name="favorita"
            register={register}
            setError={setError}
            error={errors?.favorita}
            inputProps={{
              type: 'checkbox',
            }}
          />
          <SelectInput
            register={register}
            setError={setError}
            name="status"
            items={TaskStatus}
            error={errors?.status as FieldError | undefined}
          />
          <SelectInput
            register={register}
            setError={setError}
            name="ordenar"
            items={TaskSearchOrder}
            error={errors?.ordenar as FieldError | undefined}
          />
          <SelectInput
            register={register}
            setError={setError}
            name="referência"
            items={TaskSearchBy}
            error={errors?.referência as FieldError | undefined}
          />
          <button type="submit" className={styles.search__form__button}>
            <FaSearch size={20} />
            Pesquisar
          </button>
        </form>
      </div>
      <div className={styles.container__task__card}>
        {tasks.length === 0 ? (
          <h3>Sem tasks disponíveis.</h3>
        ) : (
          tasks.map((t) => (
            <div className={styles.task__card} key={t.id}>
              <TaskCard
                title={t.title}
                description={t.description}
                limitDate={t.limitDate}
                status={t.status}
                color={t.color || ''}
                id={t.id}
                favorite={t.favorite || ''}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
