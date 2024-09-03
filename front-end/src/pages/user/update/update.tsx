import { useEffect } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchemaUpdate } from '../../../validators';
import { IUpdate } from '../../../interfaces/auth';
import { FormFieldConstructor } from '../../../components/common/Form/form';
import { SelectInput } from '../../../components/common/Select/SelectInput';
import { States } from './step/PersonalInfos/utils/States';
import { conversionToUpdateDataApi } from '../../../utils/dataConversion';
import { useAuthProvider } from '../../../context/Auth';
import { PersonalInfosUpdateInterface } from './step/PersonalInfos/utils/personalInfos.zod.interface';
import { userUpdate } from '../../../services/user.service';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

interface RegisterComponentsProps {}

type StateType = (typeof States)[number];

export default function UpdateScreen(props: RegisterComponentsProps) {
  const { currentUser, loginUser } = useAuthProvider();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<IUpdate>({
    resolver: zodResolver(userSchemaUpdate),
    mode: 'onBlur',
  });

  const navigate = useNavigate();

  // Atualiza os valores do formulário sempre que currentUser mudar
  useEffect(() => {
    if (currentUser) {
      reset({
        nome: currentUser.name || '',
        email: currentUser.email || '',
        username: currentUser.username || '',
        senha: '',
        confirmação: '',
        logradouro: currentUser.street || '',
        número: currentUser.number || '',
        bairro: currentUser.neighborhood || '',
        município: currentUser.city || '',
        estado: (currentUser.state as StateType) || '',
        país: currentUser.country || '',
        cep: currentUser.cep || '',
        complemento: currentUser.complement || '',
      });
    }
  }, [currentUser, reset]);

  async function onSubmit(data: PersonalInfosUpdateInterface) {
    const apiData = conversionToUpdateDataApi(data);
    await userUpdate(apiData);
    loginUser();
    navigate('/profile');
  }

  const FormField = FormFieldConstructor<IUpdate>();

  return (
    <section className={styles.form__container}>
      <div className={styles.form__container__center}>
        {currentUser ? (
          <>
            <h1>Atualizar</h1>
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
                  placeholder: 'E-mail',
                }}
              />
              <FormField
                name="username"
                register={register}
                setError={setError}
                error={errors?.username}
                inputProps={{
                  type: 'text',
                  placeholder: 'Nome de usuário',
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
                  placeholder: 'País',
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
                Atualizar
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>Sem permissão</h1>
          </>
        )}
      </div>
    </section>
  );
}
