import { Link } from 'react-router-dom';
import { useAuthProvider } from '../../context/Auth';
import styles from './styles.module.scss'

export function ProfileScreen() {

  const { currentUser } = useAuthProvider();


 
  async function onDeleteClick(event: { preventDefault: () => void; }) {
    event.preventDefault();
    console.log("Deletar clicado");
  }

  return (
    <section className={styles.profile__container}>
      <div className={styles.profile__container__center}>
     <>
      {currentUser ? (
        <>
       <h1>Perfil</h1>
          <div  className={styles.profile__links__container}>
            <div className={styles.profile__links__container__item}>
            <a href="#" onClick={onDeleteClick}>Deletar</a>
            </div>
            <div className={styles.profile__links__container__item}>
            <Link to={''}>deletar</Link>
              
            </div>
          </div>
        
          <div>Nome: {currentUser.name}</div>
          <div>Email: {currentUser.email}</div>
          <div>Usuário: {currentUser.username}</div>       
          <div>
            Endereço: {currentUser.street}, 
            número: {currentUser.number}, bairro: {currentUser.neighborhood},
             {" "}{currentUser.city} - {currentUser.state}/{currentUser.country}
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
  )
  
}