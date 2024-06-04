import tw from "twin.macro";
import TreatmentVideoBG from "../image/background/unsplash_NPjNtTExSJ4.png";
import { BlueP, GrayP, TwTitle_MD } from "../../../components/Material";
import VideoImg from '../../../assets/website/Group4.png'
const TreatmentVideo = () => {
    const TreatmentContainer = tw.div`relative mt-[13.9rem]`;
    const Overlay = tw.div`top-0 bottom-0 left-0 right-0 absolute z-0 bg-[#09115699] opacity-[1.6]`;
    const TreatmentVideoBGWrapper = tw.div`-z-10`;
    const TreatmentVideoBGImg = tw.img` w-full`;

    const VideoContainer = tw.div`max-w-[71.25rem] mx-auto z-10 absolute inset-0 pt-[10.7rem] 2lg:pt-[12%] lg:pt-[10%] md:pt-0 sm:pt-0 flex items-center justify-between 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:px-[10%] mb-[8.5rem] md:flex-col md:px-[6%] md:max-w-full md:w-full sm:flex-col sm:px-[2%] sm:max-w-full sm:w-full`

    const VideoContent = tw.div`flex flex-col max-w-[50%] md:text-center md:max-w-full md:w-full md:mb-8 sm:text-center sm:max-w-full sm:w-full sm:mb-6 `;
    const VideoTitle = tw(TwTitle_MD)`mb-[1.2rem] tracking-[0.018rem] text-white`;
    const VideoDescription = tw(BlueP)`mb-[2.5rem] text-dark_white md:w-[80%] md:mx-auto md:mb-[1.5rem] sm:mb-[1rem] sm:w-[80%] sm:mx-auto`;

    const PlayButton = tw.div`flex items-center justify-between mt-[-2.2rem] pr-[3.8rem] 2lg:pr-[12%] lg:pr-[10%] md:pr-[8%] md:pt-[6%] md:w-full md:max-w-[60%] sm:pr-[6%]  sm:pt-[6%] sm:w-full sm:max-w-[50%]`;
    const PlayImgWrapper = tw.div`2lg:max-w-full lg:max-w-full  md:w-full md:max-w-full md:mx-auto md:px-[10%]  sm:w-full sm:max-w-full sm:mx-auto sm:px-[5%]`;
    const PlayImg = tw.img`max-w-full mr-[0.6rem] md:max-w-full md:w-full sm:max-w-full sm:w-full`;
    const Video = tw(GrayP)`text-white text-nowrap`;
    return (
        <>
            <TreatmentContainer>
                <TreatmentVideoBGWrapper>
                    <TreatmentVideoBGImg src={TreatmentVideoBG} alt="" />
                </TreatmentVideoBGWrapper>
                <Overlay></Overlay>
                <VideoContainer>
                    <VideoContent>
                        <VideoTitle>Best responsibility and service for our customers</VideoTitle>
                        <VideoDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</VideoDescription>
                    </VideoContent>
                    <PlayButton>
                        <PlayImgWrapper>
                            <PlayImg src={VideoImg} alt="VideoBanner" />
                        </PlayImgWrapper>
                        <Video>Treatments Videos</Video>
                    </PlayButton>
                </VideoContainer>
            </TreatmentContainer>
        </>
    )
}

export default TreatmentVideo