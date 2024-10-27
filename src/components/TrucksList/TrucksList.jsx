import trucksCss from './TrucksList.module.css';
import TruckCard from '../TruckCard/TruckCard';

export const TrucksList = ({ trucks }) => {
  return (
    <ul className={trucksCss.list}>
      {trucks.map(truck => (
        <li key={truck.id} className={trucksCss.cardWrapper}>
          <TruckCard />
        </li>
      ))}
    </ul>
  );
};

export default TrucksList;
