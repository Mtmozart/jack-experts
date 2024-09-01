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
          <Button
            text={'Cadastra-se'}
            redirectTo="/register"
            onClick={undefined}
          />
        </div>
      </div>

      <div className={styles.about__container}>
        <div className={styles.about__container__content}>
          <div className={styles.about__container__content__text}>
            <h2>Algo importante</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              blanditiis quas optio ad accusamus, cupiditate itaque ex,
              dignissimos vero sapiente suscipit magnam incidunt accusantium
              libero quia nam inventore iste excepturi.
            </p>
            <Button text={'Saiba mais'} />
          </div>
        </div>
        <div className={styles.about__container__content}>
          <img src="/sobre.png" alt="sobre_nos_tasks" />
        </div>
      </div>
    </>
  );
}
