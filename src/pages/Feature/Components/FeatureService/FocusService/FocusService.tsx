import "twin.macro";
import tw from "twin.macro";
import { GrayP, TwTitle_SM } from "../../../../../components/Material";
import ArrowRight from "../../../../../assets/website/angle-double-right.png";

const FocusService = (props: {
  img: string;
  name: string;
  description: string;
}) => {
  const ServiceItemWrapper = tw.div`flex flex-col border border-solid border-[#9BA2E0]  max-w-[16.313rem] max-h-[18.938rem] w-full h-full bg-white px-[2.25rem] pt-[1.938rem] pb-[4.25rem] rounded-[1.563rem] mx-auto 2lg:px-[4%] lg:px-[4%] md:max-w-[100%] md:items-center sm:max-w-[100%] sm:items-center`;
  const ServiceImageWrapper = tw.div`max-w-[4rem] max-h-[4rem] w-full h-full mb-[1.5rem]`;
  const ServiceImage = tw.img``;
  const ServiceName = tw(TwTitle_SM)`mb-[0.9rem] 2lg:text-base lg:text-sm `;
  const ServiceDescription = tw(
    GrayP
  )`font-normal text-sm leading-[1.313rem] tracking-widest  mb-[1.1rem] md:max-w-[90%] md:text-center sm:max-w-[90%] sm:text-center`;
  return (
    <ServiceItemWrapper>
      <ServiceImageWrapper>
        <ServiceImage src={props.img} alt="" />
      </ServiceImageWrapper>
      <ServiceName>{props.name}</ServiceName>
      <ServiceDescription>{props.description}</ServiceDescription>
      <div tw="flex ">
        <p tw="font-semibold text-sm leading-[1.094rem] text-light_pink font-poppins mr-[0.6rem]">
          Learn more
        </p>
        <img src={ArrowRight} alt="" />
      </div>
    </ServiceItemWrapper>
  );
};

export default FocusService;
