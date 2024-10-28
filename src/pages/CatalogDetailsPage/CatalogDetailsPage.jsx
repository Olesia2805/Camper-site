import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTruckDetails } from '../../redux/trucksSlice'; // Adjust the import according to your slice
import DetailCard from '../../components/DetailCard/DetailCard';
import Loader from '../../components/Loader/Loader';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
// import detailsCss from './CatalogDetailsPage.module.css';

const CatalogDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { truck, loading, error } = useSelector(state => state.trucks);

  useEffect(() => {
    if (id) {
      dispatch(fetchTruckDetails(id));
    }
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return <p>Error fetching truck details: {error.message}</p>;
  if (!truck) return <p>No truck found.</p>;

  return (
    <main>
      <Container>
        <Section>
          <DetailCard truck={truck} />
        </Section>
      </Container>
    </main>
  );
};

export default CatalogDetailsPage;
