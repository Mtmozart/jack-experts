import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { useAuthProvider } from '../../../context/Auth';
import { deleteUser } from '../../../services/user.service';

export function ProfileScreen() {
  const navigate = useNavigate();
  const { currentUser } = useAuthProvider();

  const handleClickDelete = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault();
    await deleteUser();
    navigate('/');
  };
  return (
    <section className={styles.profile__container}>
      <div className={styles.profile__container__center}>
        <>
          {currentUser ? (
            <>
              <h1>Perfil</h1>
              <div className={styles.profile__links__container}>
                <div
                  onClick={handleClickDelete}
                  className={styles.profile__links__container__item}
                >
                  <a href="#" role="button">
                    Deletar
                  </a>
                </div>
                <div className={styles.profile__links__container__item}>
                  <Link to={'/update'}>Atualizar</Link>
                </div>
              </div>

              <div>Nome: {currentUser.name}</div>
              <div>Email: {currentUser.email}</div>
              <div>Usuário: {currentUser.username}</div>
              <div>
                Endereço: {currentUser.street}, número: {currentUser.number},
                bairro: {currentUser.neighborhood}, {currentUser.city} -{' '}
                {currentUser.state}/{currentUser.country}
              </div>
              <div>CEP: {currentUser.cep}</div>
              <div>Complemento: {currentUser?.complement}</div>
            </>
          ) : (
            <h1>Deslogado</h1>
          )}
        </>
      </div>
    </section>
  );
}
