import AboutUs from "./Components/AboutUs";
import ProfessionalTeams from "../../components/ProfessionalTeams/ProfessionalTeams";
import ContactUs from "../../components/ContactUs";
import MainService from "./Components/OurService/MainService/MainService";
import Slider from "./Components/Slider";

const General = () => {
  return (
    <>
      <Slider />
      <MainService />
      <AboutUs />
      <ProfessionalTeams />
      <ContactUs />
    </>
  );
};

export default General;
