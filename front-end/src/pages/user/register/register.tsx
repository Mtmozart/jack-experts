import styles from './styles.module.scss';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '../../../validators';
import { IRegister } from '../../../interfaces/auth';
import { FormFieldConstructor } from '../../../components/common/Form/form';
import { SelectInput } from '../../../components/common/Select/SelectInput';
import { States } from './step/PersonalInfos/utils/States';
import { PersonalInfosInterface } from './step/PersonalInfos/utils/personalInfos.zod.interface';
import { conversionToCreateDataApi } from '../../../utils/dataConversion';
import { userRegister } from '../../../services/user.service';
import { useAuthProvider } from '../../../context/Auth';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { toastMessage } from '../../../helpers/messages';
import { useNavigate } from 'react-router-dom';

interface RegisterComponentsProps {}

export default function RegisterScreen(props: RegisterComponentsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IRegister>({
    resolver: zodResolver(userSchema),
    mode: 'onBlur',
  });
  const [requesting, setRequesting] = useState<boolean>(false);
  const { currentUser } = useAuthProvider();
  const navigate = useNavigate();

  async function onSubmit(data: PersonalInfosInterface) {
    if (requesting) {
      toast.warn(toastMessage.REQUESTING);
      return;
    }
    try {
      const apiData = conversionToCreateDataApi(data);
      userRegister(apiData);
      toast.success('Usuário criado com sucesso');
      navigate('/login');
    } catch (error: any) {
      const message = error.message;
      toast.error(message);
      console.error('Erro ao fazer login:', error);
    } finally {
      setRequesting(false);
    }
  }

  const FormField = FormFieldConstructor<IRegister>();

  return (
    <section className={styles.form__container}>
      <div className={styles.form__container__center}>
        {currentUser ? (
          <>
            <h1>Sem permissão</h1>
          </>
        ) : (
          <>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                name="nome"
                register={register}
                setError={setError}
                error={errors?.nome}
                inputProps={{
                  type: 'text',
                  placeholder: 'Nome completo',
                }}
              />
              <FormField
                name="email"
                register={register}
                setError={setError}
                error={errors?.email}
                inputProps={{
                  type: 'email',
                  placeholder: 'Seu Email',
                }}
              />
              <FormField
                name="username"
                register={register}
                setError={setError}
                error={errors?.username}
                inputProps={{
                  type: 'text',
                  placeholder: 'Username',
                }}
              />
              <FormField
                name="senha"
                register={register}
                setError={setError}
                error={errors?.senha}
                inputProps={{
                  type: 'password',
                  placeholder: 'Sua senha',
                }}
              />
              <FormField
                name="confirmação"
                register={register}
                setError={setError}
                error={errors?.confirmação}
                inputProps={{
                  placeholder: 'Confirme sua senha',
                  type: 'password',
                }}
              />
              <FormField
                name="logradouro"
                register={register}
                setError={setError}
                error={errors?.logradouro}
                inputProps={{
                  placeholder: 'Logradouro',
                  type: 'text',
                }}
              />

              <FormField
                name="número"
                register={register}
                setError={setError}
                error={errors?.número}
                inputProps={{
                  placeholder: 'Número',
                  type: 'text',
                }}
              />

              <FormField
                name="bairro"
                register={register}
                setError={setError}
                error={errors?.bairro}
                inputProps={{
                  placeholder: 'Bairro',
                  type: 'text',
                }}
              />

              <FormField
                name="município"
                register={register}
                setError={setError}
                error={errors?.município}
                inputProps={{
                  placeholder: 'Município',
                  type: 'text',
                }}
              />

              <SelectInput
                register={register}
                setError={setError}
                name="estado"
                items={States}
                error={errors?.estado as FieldError | undefined}
              />

              <FormField
                name="país"
                register={register}
                setError={setError}
                error={errors?.país}
                inputProps={{
                  placeholder: 'Localidade',
                  type: 'text',
                }}
              />

              <FormField
                name="cep"
                register={register}
                setError={setError}
                error={errors?.cep}
                inputProps={{
                  placeholder: 'CEP',
                  type: 'text',
                }}
              />

              <FormField
                name="complemento"
                register={register}
                setError={setError}
                error={errors?.complemento}
                inputProps={{
                  placeholder: 'Complemento',
                  type: 'text',
                }}
              />
              <button type="submit" className={styles.form__container__button}>
                Cadastrar
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
