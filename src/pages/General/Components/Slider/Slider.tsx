import "twin.macro";
import tw from "twin.macro";
import {TwButton, TwTitle_LG, BlueP} from "../../../../components/Material/Material";
import SliderBanner from "../../image/banner/Frame1.png";
import SliderButton from "../../../../assets/website/SlideButton.png";
import BGTop from "../../image/background/SlideBackground.png";
const Slider = () => {
  const SliderContainer = tw.div`flex flex-col justify-center items-center max-w-[71.25rem] mx-auto pt-[9.938rem] md:pt-[6rem] sm:pt-[4rem]`;
  const MainSlider = tw.div`flex flex-row items-center 2lg:px-[5%] lg:px-[5%] mb-[8.5rem] md:flex-col md:px-[3%] md:max-w-full md:w-full sm:flex-col sm:px-[2%] sm:max-w-full sm:w-full`;
  const SliderContent = tw.div`flex flex-col max-w-[45%] pl-[2.438rem] mr-[1.4rem] md:text-center md:max-w-full md:w-full md:mb-8 sm:text-center sm:max-w-full sm:w-full sm:mb-6 `;
  const SliderTitle = tw(TwTitle_LG)` mb-[0.5rem] mt-[-1.2rem] tracking-[0.018rem]`;
  const SliderDescription = tw(BlueP)`mb-[2rem]`;
  const DetailButton = tw(TwButton)`pt-[1.123rem] pr-[2.5rem] pb-[1.141rem] pl-[2.563rem] md:mx-auto md:px-[10%] md:py-[2%] sm:mx-auto sm:px-[6%] sm:py-[2%] tracking-[0.11rem]`;
  const WrapperSliderBN = tw.div`w-[37.594rem] 2lg:max-w-full lg:max-w-full  md:w-full md:max-w-full md:mx-auto md:px-[10%]  sm:w-full sm:max-w-full sm:mx-auto sm:px-[5%]`;
  const SliderBN = tw.img`max-w-full md:max-w-full md:w-full sm:max-w-full sm:w-full`;
  const BGTopWrapper = tw.div`absolute top-0 left-0 xl:w-full 2xl:w-full -z-10`;
  const BackGroundTop = tw.img`2xl:w-full` ;
  return (
    <SliderContainer>
      <MainSlider>
        <SliderContent>
          <SliderTitle>Clinic & beauty consultant</SliderTitle>
          <SliderDescription>
            It is a long established fact that a reader will be by the readable
            content of a page.
          </SliderDescription>
          <DetailButton>More Details</DetailButton>
        </SliderContent>
        <WrapperSliderBN>
          <SliderBN src={SliderBanner} alt="SliderBanner" />
        </WrapperSliderBN>
      </MainSlider>
      <div>
        <img src={SliderButton} alt="SliderButton" />
      </div>
      <BGTopWrapper>
        <BackGroundTop src={BGTop} alt="BGTop" />
      </BGTopWrapper>
    </SliderContainer>
  );
};

export default Slider;
