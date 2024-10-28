import catalogCss from './CatalogPage.module.css';
import FiltersCategory from '../../components/FiltersCategory/FiltersCategory';
import LocationInput from '../../components/LocationInput/LocationInput';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';

const CatalogPage = () => {
  return (
    <main>
      <Container>
        <Section className="catalog">
          <LocationInput />
          <h4 className={catalogCss.filters}>Filters</h4>
          <FiltersCategory />
        </Section>
      </Container>
    </main>
  );
};

export default CatalogPage;
