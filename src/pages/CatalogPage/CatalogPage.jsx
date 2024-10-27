import catalogCss from './CatalogPage.module.css';
import FiltersCategory from '../../components/FiltersCategory/FiltersCategory';
import LocationInput from '../../components/LocationInput/LocationInput';

const CatalogPage = () => {
  return (
    <main>
      <h4 className={catalogCss.location}>Location</h4>
      <LocationInput />
      <h4 className={catalogCss.filters}>Filters</h4>
      <FiltersCategory />
    </main>
  );
};

export default CatalogPage;
