import "twin.macro";
import tw from "twin.macro";
import { TwTitle_MD, TwSpan, GrayP } from "../../../../components/Material";
import ServiceList from "./ServiceList/ServiceList";

const FeatureService = () => {
  const ServiceContainer = tw.div`max-w-[71.25rem] pt-[9.7rem] mx-auto flex flex-col 2lg:max-w-full 2lg:w-full 2lg:px-[10%] lg:max-w-full lg:w-full lg:px-[8%] md:px-[6%] sm:px-[6%]`;
  const ServiceIntroduction = tw.div`text-center mx-auto mb-[4.8rem]`;
  const ServiceSpan = tw(TwSpan)`tracking-[0rem]`;
  const ServiceTitle = tw(
    TwTitle_MD
  )`max-w-full mx-auto mt-[0.725rem] xs:max-w-[80%]`;
  const ServiceDescription = tw(
    GrayP
  )`mt-[1.2rem] font-normal text-nowrap tracking-widest mx-auto md:max-w-[80%] sm:max-w-[75%]`;
  return (
    <ServiceContainer>
      <ServiceIntroduction>
        <ServiceSpan>Main Services</ServiceSpan>
        <ServiceTitle>Our focus services</ServiceTitle>
        <ServiceDescription>Lorem ipsum dolor sit amet.</ServiceDescription>
      </ServiceIntroduction>
      <ServiceList />
    </ServiceContainer>
  );
};

export default FeatureService;
