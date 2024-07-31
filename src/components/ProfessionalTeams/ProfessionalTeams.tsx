import tw from "twin.macro";
import { GrayP, TwSpan, TwTitle_MD } from "../Material";
import ListExpert from "./ListExpert";

const ProfessionalTeams = () => {
  const TeamsContainer = tw.div`max-w-[67.813rem] mx-auto pt-[8.8rem] lg:max-w-full 2lg:px-[6%] lg:px-[6%] md:pt-[22rem] sm:pt-[16rem]`;
  const TeamsIntroduction = tw.div`text-center`;
  const TeamsSpan = tw(TwSpan)`mb-[0.8rem] `;
  const TeamTitle = tw(TwTitle_MD)`mb-[1.3rem] mt-[0.6rem] tracking-[0.015rem]`;
  const TeamsDescription = tw(GrayP)`font-normal tracking-[0.1039rem] mb-[3.4rem] md:max-w-[90%] md:mx-auto sm:max-w-[90%] sm:mx-auto`;
  return (
    <TeamsContainer>
      <TeamsIntroduction>
        <TeamsSpan data-aos="fade-up">Professional Teams</TeamsSpan>
        <TeamTitle data-aos="fade-up">The Professional expert</TeamTitle>
        <TeamsDescription data-aos="fade-up" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </TeamsDescription>
      </TeamsIntroduction>
      <ListExpert />
    </TeamsContainer>
  );
};

export default ProfessionalTeams;
