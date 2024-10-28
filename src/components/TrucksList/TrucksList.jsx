import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import trucksCss from './TrucksList.module.css';
import TruckCard from '../TruckCard/TruckCard';
import { fetchTrucks, loadMoreTrucks } from '../../redux/trucksSlice';

export const TrucksList = () => {
  const dispatch = useDispatch();
  const { trucks, currentPage, trucksPerPage } = useSelector(
    state => state.trucks
  );

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreTrucks());
  };

  const displayedTrucks = trucks.slice(0, (currentPage + 1) * trucksPerPage);

  return (
    <>
      <ul className={trucksCss.list}>
        {displayedTrucks.map(truck => (
          <li key={truck.id} className={trucksCss.cardWrapper}>
            <TruckCard truck={truck} />
          </li>
        ))}
      </ul>
      {displayedTrucks.length < trucks.length && (
        <button onClick={handleLoadMore} className={trucksCss.loadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default TrucksList;
