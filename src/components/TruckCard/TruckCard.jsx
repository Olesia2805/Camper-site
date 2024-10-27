import cardCss from './TruckCard.module.css';
import Button from '../Button/Button';
import { BsSuitHeart } from 'react-icons/bs';

const TruckCard = ({ truck }) => {
  return (
    <>
      <img className={cardCss.img} src={``} alt={truck.title} />
      <div className={cardCss.info}>
        <h2 className={cardCss.name}></h2>
        <p className={cardCss.review}></p>
        <p className={cardCss.location}></p>
        <p className={cardCss.price}></p>
        <BsSuitHeart />
        <p className={cardCss.description}></p>
        <></>
        <Button></Button>
      </div>
    </>
  );
};

export default TruckCard;
