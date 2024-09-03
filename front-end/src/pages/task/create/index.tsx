import { FieldError, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { ITaskCreate } from '../../../interfaces/task';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '../../../validators/task.validator';
import { useAuthProvider } from '../../../context/Auth';
import { FormFieldConstructor } from '../../../components/common/Form/form';
import { SelectInput } from '../../../components/common/Select/SelectInput';
import { typeTaskStatus } from '../../../interfaces/typeTaskStatus';
import { TaskStatus } from './TaskInfo/Status';
import { TaskColor } from './TaskInfo/Color';
import { TextArea } from '../../../components/common/Text-area/TextArea';
import { TaskInfosInterface } from './TaskInfo/taskInfos.zod';
import { conversionToCreateTaskDataApi } from '../../../utils/dataConversionTask';
import { createTask } from '../../../services/task.service';
export function CreateScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ITaskCreate>({
    resolver: zodResolver(taskSchema),
    mode: 'onBlur',
  });
  const { currentUser } = useAuthProvider();

  async function onSubmit(data: TaskInfosInterface) {
    const dataApi = conversionToCreateTaskDataApi(data, currentUser?.id);
    createTask(dataApi);
  }
  const FormField = FormFieldConstructor<ITaskCreate>();
  return (
    <section className={styles.container__task}>
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
        <TextArea
          name="descrição"
          register={register}
          setError={setError}
          error={errors?.descrição}
          inputProps={{
            type: 'text',
            placeholder: 'Descrição',
          }}
        />
        <FormField
          name="data"
          register={register}
          setError={setError}
          error={errors?.data}
          inputProps={{
            type: 'date',
            placeholder: 'Data',
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
          name="cor"
          items={TaskColor}
          error={errors?.status as FieldError | undefined}
        />

        <button type="submit" className={styles.form__container__button}>
          Cadastrar
        </button>
      </form>
    </section>
  );
}
