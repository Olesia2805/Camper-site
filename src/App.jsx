import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy, Suspense } from 'react';

import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import Section from './components/Section/Section';
import Container from './components/Container/Container';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const CatalogDetailsPage = lazy(() =>
  import('./pages/CatalogDetailsPage/CatalogDetailsPage')
);
const CatalogFeature = lazy(() =>
  import('./components/CatalogFeature/CatalogFeature')
);
const CatalogReviews = lazy(() =>
  import('./components/CatalogReviews/CatalogReviews')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Navigation />
      <Container>
        <Section>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/catalog/:id" element={<CatalogDetailsPage />}>
                <Route path="feature" element={<CatalogFeature />} />
                <Route path="reviews" element={<CatalogReviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Section>
      </Container>
    </>
  );
};

export default App;
