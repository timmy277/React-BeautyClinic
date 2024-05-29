import tw from "twin.macro";
import { BlueP, GrayP, TwButton, TwTitle_LG } from "../../../../components/Material/Material";
import TourVideoImg from "../../image/banner/Group4.png";
import SliderBackGround from "../../image/background/BackgroundSlider.png";
const FeatureSlider = () => {
    const SliderContainer = tw.div`max-w-[71.25rem] mx-auto pt-[12.9rem] md:pt-[6rem] sm:pt-[4rem] flex items-center justify-between lg:px-[5%] mb-[8.5rem] md:flex-col md:px-[3%] md:max-w-full md:w-full sm:flex-col sm:px-[2%] sm:max-w-full sm:w-full`;
    const SliderContent = tw.div`flex flex-col max-w-[45%] md:text-center md:max-w-full md:w-full md:mb-8 sm:text-center sm:max-w-full sm:w-full sm:mb-6 `;

    const SliderTitle = tw(TwTitle_LG)` mb-[0.8rem] tracking-[0.018rem] text-white`;
    const SliderDescription = tw(BlueP)`mb-[2.5rem] text-dark_white`;
    const DetailButton = tw(TwButton)`bg-transparent max-h-[3.25rem] border border-white border-solid rounded-[0.938rem] pt-[0.875rem] 
    pr-[1.938rem] pb-[0.875rem] pl-[1.813rem] md:mx-auto md:px-[10%] md:py-[2%] sm:mx-auto sm:px-[6%] 
    sm:py-[2%] tracking-[0.1rem] font-medium`;

    const PlayButton = tw.div`flex items-center justify-between pr-[9rem]`
    const PlayImgWrapper = tw.div`lg:max-w-full  md:w-full md:max-w-full md:mx-auto md:px-[10%]  sm:w-full sm:max-w-full sm:mx-auto sm:px-[5%]`;
    const PlayImg = tw.img`max-w-full mr-[1.8rem] md:max-w-full md:w-full sm:max-w-full sm:w-full`;
    const TourVideo = tw(GrayP)`text-white`

    const BGTopWrapper = tw.div`absolute top-0 left-0 2xl:w-full -z-10`;
    const BackGroundTop = tw.img`2xl:w-full` ;
    return (
        <SliderContainer>
            <SliderContent>
                <SliderTitle>Your beauty center place</SliderTitle>
                <SliderDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.
                </SliderDescription>
                <DetailButton>More Details</DetailButton>
            </SliderContent>
            <PlayButton>
                <PlayImgWrapper>
                    <PlayImg src={TourVideoImg} alt="SliderBanner" />
                </PlayImgWrapper>
                <TourVideo>Tour Video</TourVideo>
            </PlayButton>
            <BGTopWrapper>
                <BackGroundTop src={SliderBackGround} alt="SliderBackGround" />
            </BGTopWrapper>
        </SliderContainer>
    );
};

export default FeatureSlider
