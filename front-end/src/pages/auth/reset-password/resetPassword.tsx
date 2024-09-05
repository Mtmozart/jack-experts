import { FormFieldConstructor } from '../../../components/common/Form/form';
import { useAuthProvider } from '../../../context/Auth';
import { IResetPassword } from '../../../interfaces/auth';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ResetSchema } from '../../../validators/reset.validator';
import { resetPassword } from '../../../services/auth.service';

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

  const FormField = FormFieldConstructor<IResetPassword>();

  async function onSubmit(data: IResetPassword) {
    resetPassword(data);
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
