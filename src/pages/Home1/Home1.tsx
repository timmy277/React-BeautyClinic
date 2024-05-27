
import AboutUs from "../../components/AboutUs/AboutUs";
import ProfessionalTeams from "../../components/ProfessionalTeams/ProfessionalTeams";
import ContactUs from "../../components/ContactUs/ContactUs";
import MainService from "./Components/OurService/MainService/MainService";
import Slider from "./Components/Slider/Slider";

const Home1 = () => {
  return (
    <>
      <Slider/>
      <MainService />
      <AboutUs />
      <ProfessionalTeams />
      <ContactUs />
    </>
  );
};

export default Home1;
