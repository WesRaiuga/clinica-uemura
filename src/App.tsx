import { Routes, Route } from 'react-router-dom';

import Loader from '@/components/Loader/Loader';
import { useAppLoader } from '@/hooks/useAppLoader';
import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound/NotFound';

function App() {
  const { isLoading, shouldShowContent } = useAppLoader();

  return (
    <>
      <Loader loading={isLoading} />
      
      <div
        style={{
          opacity: shouldShowContent ? 1 : 0,
          transition: 'opacity 1.5s ease',
        }}
      >
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
