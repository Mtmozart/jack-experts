import { FormFieldConstructor } from '../../../components/common/Form/form';
import { useAuthProvider } from '../../../context/Auth';
import { IResetPassword } from '../../../interfaces/auth';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ResetSchema } from '../../../validators/reset.validator';
import { resetPassword } from '../../../services/auth.service';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { toastMessage } from '../../../helpers/messages';

interface ResetPasswordComponentsProps {}
export default function ResetPasswordScreen(
  props: ResetPasswordComponentsProps,
) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IResetPassword>({
    resolver: zodResolver(ResetSchema),
    mode: 'onBlur',
  });
  const [requesting, setRequesting] = useState<boolean>(false);

  const FormField = FormFieldConstructor<IResetPassword>();

  async function onSubmit(data: IResetPassword) {
    if (requesting) {
      toast.warn(toastMessage.REQUESTING);
      return;
    }
    try {
      resetPassword(data);
      toast.success('Nova senha enviada com sucesso');
    } catch (error: any) {
      const message = error.message;
      toast.error(message);
      console.error('Erro ao resetar a senha:', error);
    } finally {
      setRequesting(false);
    }
  }

  const { currentUser } = useAuthProvider();
  return (
    <section className={styles.login__container}>
      <div className={styles.login__container__center}>
        {currentUser ? (
          <>
            <h1>Você está logado</h1>
          </>
        ) : (
          <>
            <h1>Reset de senha</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                name="email"
                register={register}
                setError={setError}
                error={errors?.email}
                inputProps={{
                  type: 'email',
                  placeholder: 'Digite seu e-mail',
                }}
              />
              <button className={styles.login__container__button} type="submit">
                Reset de Senha
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
