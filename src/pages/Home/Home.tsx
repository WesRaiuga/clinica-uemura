import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FloatingButtonArea from "../../views/FloatingButtonArea/FloatingButtonArea";

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
    </>
  );
};

export default Home;
