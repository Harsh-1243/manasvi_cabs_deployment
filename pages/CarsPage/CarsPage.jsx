import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import CarsCards from "./CarsCards/CarsCards";
import CarsFAQSection from "./CarsFAQSection/CarsFAQSection";

const CarsPage = () => {
  return (
    <>
      <HeaderBanner title={"Our Cars"} />
      <CarsCards />
      <CarsFAQSection />
    </>
  );
};

export default CarsPage;
