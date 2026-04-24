import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader/Loader";
import NotFound from "./pages/NotFound/NotFound";

const loaderTime = Math.random() * (600 - 300) + 300; // tempo aleatório entre 300ms e 600ms
const contentTime = 400; // tempo fixo para mostrar o conteúdo após o loader

function App() {
  const [showContent, setShowContent] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), loaderTime);
    return () => clearTimeout(timer);
  }, [setLoading]); // mostra o loader a cada troca de rota

  useEffect(() => {
    if (!loading) {
      const show = setTimeout(() => setShowContent(true), contentTime);
      return () => clearTimeout(show);
    } else {
      setShowContent(false);
    }
  }, [loading, setShowContent]);

  return (
    <>
      <Loader loading={loading} />
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 1.5s ease",
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
