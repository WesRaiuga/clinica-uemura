import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FloatingButtonArea from "../../views/FloatingButtonArea/FloatingButtonArea";
import Hero2 from "@/views/Hero2/Hero";
import FaqSection from "@/views/FaqSection/FaqSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const scrollTarget = document.getElementById(scrollTo);
      if (scrollTarget) {
        scrollTarget.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <FloatingButtonArea />

      <Hero2 />

      <FaqSection />
    </>
  );
};

export default Home;
