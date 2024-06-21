import "twin.macro";
import tw from "twin.macro";
import { GrayP, TwTitle_SM } from "../../../../../components/Material";
const ServiceItem = (props: {
  img: string;
  name: string;
  description: string;
}) => {
  const ServiceItemWrapper = tw.div`flex flex-col max-w-[21.438rem] max-h-[28.625rem] w-full h-full items-center border-none bg-white pb-[4.25rem] shadow-md rounded-[2.625rem] pt-[3.688rem] mx-auto md:max-w-[100%] sm:max-w-[100%] `;
  const ServiceImageWrapper = tw.div`max-w-[10.375rem] w-full max-h-[10.375rem] h-full mb-[3.625rem]`;
  const ServiceImage = tw.img``;
  const ServiceName = tw(TwTitle_SM)`mb-[1.313rem]`;
  const ServiceDescription = tw(
    GrayP
  )`text-center font-normal text-sm leading-[1.313rem] tracking-widest max-w-[17.125rem] md:max-w-[90%] sm:max-w-[90%] `;
  return (
    <ServiceItemWrapper>
      <ServiceImageWrapper>
        <ServiceImage data-aos="zoom-in" src={props.img} alt="" />
      </ServiceImageWrapper>
      <ServiceName data-aos="fade-up">{props.name}</ServiceName>
      <ServiceDescription data-aos="fade-up">{props.description}</ServiceDescription>
    </ServiceItemWrapper>
  );
};

export default ServiceItem;
