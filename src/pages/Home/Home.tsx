import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import BubbleSideDivider from '@/components/dividers/BubbleSideDivider/BubbleSideDivider';
import FaqSection from '@/views/FaqSection/FaqSection';
import FloatingButtonArea from '@/views/FloatingButtonArea/FloatingButtonArea';
import Hero from '@/views/Hero2/Hero';
import LocationSection from '@/views/LocationSection/LocationSection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const scrollTarget = document.getElementById(scrollTo);
      if (scrollTarget) {
        scrollTarget.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <FloatingButtonArea />

      <Hero />

      {/* Usando valor fixo para garantir estabilidade visual */}
      <BubbleSideDivider color="#ffffff" />

      <LocationSection />

      <FaqSection />
    </>
  );
};

export default Home;
