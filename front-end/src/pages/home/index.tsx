import { Button } from '../../components/common/Button/Button';
import styles from './styles.module.scss';

export function HomeScreen() {
  return (
    <>
      <div className={styles.main__home__container}>
        <div className={styles.main__home__content}>
          <h1>Gerencie suas atividades diárias</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            commodi iste nemo nulla? Amet quo quibusdam, dolore sit illo
            obcaecati ratione quam asperiores quis consequatur aspernatur id
            distinctio blanditiis. Quasi!
          </p>
          <Button text={'Saiba mais'} redirectTo="#" onClick={undefined} />
        </div>
      </div>
    </>
  );
}
