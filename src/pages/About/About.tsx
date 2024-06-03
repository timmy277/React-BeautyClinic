import ProfessionalTeams from "../../components/ProfessionalTeams/ProfessionalTeams";
import Clients from "./Components/Clients";
import Introduction from "./Components/Introduction";
import Mission from "./Components/Mission";
import Slogan from "./Components/Slogan";
import Vision from "./Components/Vision";

const About = () => {
  return (
    <>
      <Introduction />
      <ProfessionalTeams />
      <Slogan />
      <Vision />
      <Mission />
      <Clients />
    </>
  );
};

export default About;
