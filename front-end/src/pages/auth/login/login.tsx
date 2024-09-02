import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { ILogin } from '../../../interfaces/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../../../validators/login.validator';
import { FormFieldConstructor } from '../../../components/common/Form/form';
import { Link, useNavigate } from 'react-router-dom';
import { conversionToLoginDataApi } from '../../../utils/dataConversion';
import { login } from '../../../services/auth.service';
import { setTokenToLocalStorage } from '../../../services/localStorage.service';
import { useAuthProvider } from '../../../context/Auth';

interface LoginComponentsProps {}

export default function LoginScreen(props: LoginComponentsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILogin>({
    resolver: zodResolver(LoginSchema),
    mode: 'onBlur',
  });
  const navigate = useNavigate();
  const { loginUser, currentUser } = useAuthProvider();
  const FormField = FormFieldConstructor<ILogin>();

  async function onSubmit(data: ILogin) {
    try {
      const dataApi = conversionToLoginDataApi(data);
      const response = await login(dataApi);
      const token = response.token;

      if (token) {
        setTokenToLocalStorage('token', token);
        loginUser();
        navigate('/');
      } else {
        console.error('Token não encontrado na resposta da API');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }
  return (
    <section className={styles.login__container}>
      <div className={styles.login__container__center}>
        {currentUser ? (
          <>
            <h1>Sem permissão</h1>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                name="username"
                register={register}
                setError={setError}
                error={errors?.username}
                inputProps={{
                  type: 'text',
                  placeholder: 'Seu Nome de Usuário',
                }}
              />
              <FormField
                name="senha"
                register={register}
                setError={setError}
                error={errors?.senha}
                inputProps={{
                  type: 'password',
                  placeholder: 'Sua Senha',
                }}
              />
              <button className={styles.login__container__button} type="submit">
                Entrar
              </button>
            </form>
            <div className={styles.login__auther__routes}>
              <div>
                Não tem uma conta ? <Link to={'/register'}>Cadastre-se!</Link>
              </div>
              <div>
                Esqueceu sua senha ? <Link to={'/'}>Clique aqui!</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
