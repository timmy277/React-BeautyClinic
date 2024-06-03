import "twin.macro";
import tw from "twin.macro";
import { GrayP, TwTitle_SM } from "../../../../../components/Material";
import ArrowRight from "../../../../../assets/website/angle-double-right.png";

const News = (props: { img: string; title: string; description: string }) => {
  const NewWrapper = tw.div`flex flex-col border-none  max-w-[21.688rem] max-h-[33.938rem] w-full h-full bg-white pb-[4.25rem] shadow-md rounded-[1.563rem] mx-auto 2lg:max-h-full lg:max-h-full md:max-w-[90%] md:items-center md:mb-[7rem] md:max-h-full sm:max-w-[85%] sm:max-h-full sm:items-center `;
  const NewImageWrapper = tw.div`max-w-full max-h-full w-full h-full mb-[3.4rem] md:mx-auto`;
  const NewImage = tw.img`mx-auto md:w-full sm:w-full`;
  const NewTitle = tw(
    TwTitle_SM
  )`max-w-[85%] mb-[0.9rem] ml-[2.438rem] 2lg:max-w-full 2lg:mx-[6%] lg:max-w-full lg:mx-[6%] md:ml-0 md:text-center sm:max-w-[90%] sm:ml-0 sm:text-center`;
  const NewDescription = tw(
    GrayP
  )`max-w-[75%] font-normal text-sm leading-[1.313rem] tracking-widest ml-[2.438rem]  mb-[1.7rem] 2lg:max-w-full 2lg:mx-[6%] lg:max-w-full lg:mx-[6%] md:max-w-[90%] md:ml-0 md:text-center sm:max-w-[90%] sm:ml-0 sm:text-center`;
  return (
    <NewWrapper>
      <NewImageWrapper>
        <NewImage src={props.img} alt="" />
      </NewImageWrapper>
      <NewTitle>{props.title}</NewTitle>
      <NewDescription>{props.description}</NewDescription>
      <div tw="flex ">
        <p tw="font-semibold text-sm leading-[1.094rem] text-light_pink font-poppins ml-[2.438rem] mr-[0.6rem] 2lg:ml-[6%] lg:ml-[6%] md:ml-0 sm:ml-0">
          Learn more
        </p>
        <img src={ArrowRight} alt="" />
      </div>
    </NewWrapper>
  );
};

export default News;
