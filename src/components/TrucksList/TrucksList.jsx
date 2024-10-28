import trucksCss from './TrucksList.module.css';
import TruckCard from '../TruckCard/TruckCard';

export const TrucksList = () => {
  return (
    <ul className={trucksCss.list}>
      <li key="1" className={trucksCss.cardWrapper}>
        <TruckCard />
      </li>
      <li key="1" className={trucksCss.cardWrapper}>
        <TruckCard />
      </li>
    </ul>
  );
};

export default TrucksList;

// {
//   trucks.map(truck => (
//     <li key={truck.id} className={trucksCss.cardWrapper}>
//       <TruckCard />
//     </li>
//   ));
// }
