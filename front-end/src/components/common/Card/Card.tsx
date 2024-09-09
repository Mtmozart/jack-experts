import styles from './styles.module.scss';

interface CardProps {
  imgUrl: string;
  text: string;
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card__container}>
      <img src={props.imgUrl} />
      <p>{props.text}</p>
    </div>
  );
}
