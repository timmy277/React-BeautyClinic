import tw from "twin.macro";
import { GrayP, TwSpan, TwTitle_MD } from "../../../components/Material";
import ListExpert from "../../../components/ProfessionalTeams/ListExpert";
import TeamBG from '../image/background/BubbleBG.png'

const OurTeam = () => {
    const TeamsContainer = tw.div`max-w-[67.813rem] mx-auto pt-[7.9rem] lg:max-w-full 2lg:px-[8%] lg:px-[8%] md:pt-[2rem] sm:pt-[2rem]`;
    const TeamsIntroduction = tw.div`text-center ml-[-4.9rem] md:ml-0 sm:ml-0`;
    const TeamsSpan = tw(TwSpan)`mb-[0.8rem] `;
    const TeamTitle = tw(TwTitle_MD)`mb-[1.5rem] mt-[0.66rem] tracking-[0.015rem]`;
    const TeamsDescription = tw(GrayP)`font-normal tracking-[0.1039rem] mb-[2.3rem] md:max-w-[90%] md:mx-auto sm:max-w-[90%] sm:mx-auto`;
    return (
        <div tw='relative max-w-full'>
            <TeamsContainer>
                <div tw="absolute top-[8rem] right-0 -z-10 2xl:w-full xl:w-full">
                    <img src={TeamBG} alt="" tw='2xl:w-full xl:w-full'/>
                </div>
                <TeamsIntroduction>
                    <TeamsSpan>Our Team</TeamsSpan>
                    <TeamTitle>We are Professional</TeamTitle>
                    <TeamsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</TeamsDescription>
                </TeamsIntroduction>
                <ListExpert />
            </TeamsContainer>
        </div>
    );
};

export default OurTeam;
