import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FloatingButtonArea from "../../views/FloatingButtonArea/FloatingButtonArea";
import Hero from "@/views/Hero2/Hero";
import FaqSection from "@/views/FaqSection/FaqSection";
import BubbleSideDivider from "@/components/dividers/BubbleSideDivider/BubbleSideDivider";

const Home = () => {
  const location = useLocation();
  const backgroundColor = "#ffffff";

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

      <Hero />

      <BubbleSideDivider color={backgroundColor} />

      <FaqSection />
    </>
  );
};

export default Home;
