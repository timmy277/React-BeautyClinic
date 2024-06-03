import tw from "twin.macro";
import { GrayP, TwSpan, TwTitle_MD } from "../Material";
import ListExpert from "./ListExpert/ListExpert";

const ProfessionalTeams = () => {
  const TeamsContainer = tw.div`max-w-[67.813rem] mx-auto pt-[8.8rem] lg:max-w-full 2lg:px-[8%] lg:px-[8%] md:pt-[22rem] sm:pt-[16rem] xs:pt-0`;
  const TeamsIntroduction = tw.div`text-center`;
  const TeamsSpan = tw(TwSpan)`mb-[0.8rem] `;
  const TeamTitle = tw(TwTitle_MD)`mb-[1.3rem] mt-[0.6rem] tracking-[0.02rem]`;
  const TeamsDescription = tw(
    GrayP
  )`font-normal tracking-[0.1039rem] mb-[3.4rem] md:max-w-[90%] md:mx-auto sm:max-w-[90%] sm:mx-auto`;
  return (
    <TeamsContainer>
      <TeamsIntroduction>
        <TeamsSpan>Professional Teams</TeamsSpan>
        <TeamTitle>The Professional expert</TeamTitle>
        <TeamsDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </TeamsDescription>
      </TeamsIntroduction>
      <ListExpert />
    </TeamsContainer>
  );
};

export default ProfessionalTeams;
