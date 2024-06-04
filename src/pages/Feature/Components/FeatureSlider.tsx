import tw from "twin.macro";
import {BlueP, GrayP, TwButton, TwTitle_LG} from "../../../components/Material";
import TourVideoImg from "../../../assets/website/Group4.png";

const FeatureSlider = () => {
  const SliderBG = tw.div`max-w-full h-[57.375rem] pt-[6.3rem] bg-[url("./BackgroundSlider.png")] bg-top bg-no-repeat bg-cover absolute top-0 w-full -z-50 xl:w-full 2xl:w-full xl:h-[60rem] 2xl:h-[60rem] md:pt-[11rem] sm:pt-[11rem]`;
  const SliderContainer = tw.div`max-w-[71.25rem] mx-auto pt-[12.9rem] 2lg:pt-[12%] lg:pt-[10%] md:pt-0 sm:pt-0 flex items-center justify-between 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:px-[10%] mb-[8.5rem] md:flex-col md:px-[6%] md:max-w-full md:w-full sm:flex-col sm:px-[2%] sm:max-w-full sm:w-full`;
  const SliderContent = tw.div`flex flex-col max-w-[45%] md:text-center md:max-w-full md:w-full md:mb-8 sm:text-center sm:max-w-full sm:w-full sm:mb-6 `;
  const SliderTitle = tw(TwTitle_LG)`mb-[0.8rem] tracking-[0.018rem] text-white`;
  const SliderDescription = tw(BlueP)`mb-[2.5rem] text-dark_white md:w-[80%] md:mx-auto md:mb-[1.5rem] sm:mb-[1rem] sm:w-[80%] sm:mx-auto`;
  const DetailButton = tw(TwButton)`bg-transparent max-h-[3.25rem] border border-white border-solid rounded-[0.938rem] pt-[0.875rem] pr-[1.938rem] pb-[0.875rem] pl-[1.813rem] md:mx-auto md:px-[10%] md:py-[2%] sm:mx-auto sm:px-[6%] sm:py-[2%] tracking-[0.1rem] font-medium`;
  const PlayButton = tw.div`flex items-center justify-between pr-[9rem] 2lg:pr-[12%] lg:pr-[10%] md:pr-[8%] md:pt-[6%] md:w-full md:max-w-[60%] sm:pr-[6%]  sm:pt-[6%] sm:w-full sm:max-w-[50%]`;
  const PlayImgWrapper = tw.div`2lg:max-w-full lg:max-w-full  md:w-full md:max-w-full md:mx-auto md:px-[10%]  sm:w-full sm:max-w-full sm:mx-auto sm:px-[5%]`;
  const PlayImg = tw.img`max-w-full mr-[1.8rem] md:max-w-full md:w-full sm:max-w-full sm:w-full`;
  const TourVideo = tw(GrayP)`text-white text-nowrap`;

  // const BGTopWrapper = tw.div`absolute top-0 left-0 xl:w-full 2xl:w-full -z-10`;
  // const BackGroundTop = tw.img`xl:w-full 2xl:w-full` ;
  return (
    <SliderBG>
      <SliderContainer>
        <SliderContent>
          <SliderTitle>Your beauty center place</SliderTitle>
          <SliderDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
            massa pellentesque arcu fusce et magna consequat neque vitae
            lobortis.
          </SliderDescription>
          <DetailButton>More Details</DetailButton>
        </SliderContent>
        <PlayButton>
          <PlayImgWrapper>
            <PlayImg src={TourVideoImg} alt="SliderBanner" />
          </PlayImgWrapper>
          <TourVideo>Tour Video</TourVideo>
        </PlayButton>
        {/* <BGTopWrapper>
                    <BackGroundTop src={SliderBackGround} alt="SliderBackGround" />
                </BGTopWrapper> */}
      </SliderContainer>
    </SliderBG>
  );
};

export default FeatureSlider;
