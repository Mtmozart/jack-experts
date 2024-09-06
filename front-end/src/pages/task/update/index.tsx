import { FieldError, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { ITask, ITaskCreate } from '../../../interfaces/task';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '../../../validators/task.validator';
import { useAuthProvider } from '../../../context/Auth';
import { FormFieldConstructor } from '../../../components/common/Form/form';
import { SelectInput } from '../../../components/common/Select/SelectInput';
import { TaskStatus } from './TaskInfo/Status';
import { TaskColor } from './TaskInfo/Color';
import { TextArea } from '../../../components/common/Text-area/TextArea';
import { TaskInfosInterface } from './TaskInfo/taskInfos.zod';
import { conversionToCreateTaskDataApi } from '../../../utils/dataConversionTask';
import {
  createTask,
  findTask,
  updateTask,
} from '../../../services/task.service';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { statusConversionToPortugueseRecord } from '../../../utils/statusConversionToPortugueseRecord';
import { colorConversionToPortugueseByHex } from '../../../utils/colorConversionToPortugueseRecord';
import { toast } from 'react-toastify';
import { toastMessage } from '../../../helpers/messages';

interface UpdateComponentsProps {}

export function UpdateTaskScreen(props: UpdateComponentsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<ITaskCreate>({
    resolver: zodResolver(taskSchema),
    mode: 'onBlur',
  });
  const { currentUser } = useAuthProvider();
  const { id } = useParams();
  const [taskData, setTaskData] = useState<ITask | null>(null);
  const [requesting, setRequesting] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      toast.warning('Sem task de referência');
      navigate('/dashboard');
      return;
    }
    const fetchTask = async () => {
      try {
        const foundTask: ITask = await findTask(id);
        setTaskData(foundTask);
        reset({
          título: foundTask.title || '',
          descrição: foundTask.description || '',
          data: foundTask.limitDate
            ? new Date(foundTask.limitDate).toISOString().split('T')[0]
            : '',
          status: statusConversionToPortugueseRecord(foundTask.status),
          cor: colorConversionToPortugueseByHex(foundTask.color),
        });
      } catch (error) {
        console.error('Erro ao buscar a tarefa:', error);
      }
    };

    fetchTask();
  }, [id, reset]);

  async function onSubmit(data: TaskInfosInterface) {
    if (requesting) {
      toast.warn(toastMessage.REQUESTING);
      return;
    }
    try {
      const dataApi = conversionToCreateTaskDataApi(data, currentUser?.id);
      if (!taskData) {
        toast.error('Task não encontrada');
        navigate('/dashboard');
      } else {
        await updateTask(taskData?.id, dataApi);
        toast.success('Task atualizada com sucesso');
      }
    } catch (error: any) {
      const message = error.message;
      toast.error(message);
      console.error('Erro ao atualizar a task', error);
    } finally {
      setRequesting(false);
    }
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
          Atualizar
        </button>
      </form>
    </section>
  );
}
