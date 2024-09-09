import Card from '../Card/Card';
import styles from './styles.module.scss';

export interface CardDetails {
  imgUrl: string;
  text: string;
}

export interface CardScreenProps {
  cards: CardDetails[];
}

export default function CardScreen({ cards }: CardScreenProps) {
  return (
    <div className={styles.cardScreen__container}>
      {cards.map((card, index) => (
        <Card key={index} imgUrl={card.imgUrl} text={card.text} />
      ))}
    </div>
  );
}
