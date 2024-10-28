import cardCss from './TruckCard.module.css';
import Button from '../Button/Button';
import { BsSuitHeart } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const TruckCard = () => {
  return (
    <>
      <img
        className={cardCss.img}
        src={'https://ftp.goit.study/img/campers-test-task/1-1.webp'}
        alt={''}
      />
      <div className={cardCss.info}>
        <div className={cardCss.header}>
          <h2 className={cardCss.name}>Mavericks</h2>
          <p className={cardCss.price}>€8000.00</p>
          <BsSuitHeart size="24" className={cardCss.heart} />
        </div>
        <p className={cardCss.review}>
          <FaStar fill="#ffc531" size="16" /> 4.4(2 Reviews)
        </p>
        <p className={cardCss.location}>
          <BsMap size="16" /> Kyiv, Ukraine
        </p>
        <p className={cardCss.description}>
          Embadventures, promising comfort, style, and the freedom to explore at
          your own pace.
        </p>
        <></>
        {/* <Link to="/catalog/:id"> */}
        <Button className="picture">Show more</Button>
        {/* </Link> */}
      </div>
    </>
  );
};

export default TruckCard;
