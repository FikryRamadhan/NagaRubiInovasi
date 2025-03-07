import routes from './Utils/Route';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>

      <Router>
        <Routes>
          {routes.map((router, index) => (
            <Route
              key={index}
              path={router.path}
              element={
                <>
                  {/* Helmet untuk masing-masing route */}
                  <HelmetProvider>
                    <Helmet>
                      <title>{router.title} | Naga Rubi Inovasi</title>
                      <meta name="description" content={router.description || 'Deskripsi default halaman.'} />
                    </Helmet>
                  </HelmetProvider>
                  {router.element}
                </>
              }
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
