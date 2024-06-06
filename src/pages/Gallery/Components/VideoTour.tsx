import tw from 'twin.macro'
import TourBG from '../image/background/unsplash_eflLpWC1Geo.png'
import { GrayP, TwTitle_MD } from '../../../components/Material';
import PlayImg from '../../../assets/website/Group4.png'
const VideoTour = () => {
    const TourBackground = tw.div`relative mt-[7.8rem] `
    const Overlay = tw.div`top-0 bottom-0 left-0 right-0 absolute z-0 bg-[#09115699] opacity-[1.6]`;

    const TourContainer = tw.div`max-w-[34.688rem] items-center mx-auto flex flex-col z-10 absolute inset-0 pt-[10.73rem] 2xl:pt-[15%] xl:pt-[10%]  2lg:max-w-[60%] 2lg:px-[6%] 2lg:pt-[12%] lg:max-w-[60%] lg:px-[6%] lg:pt-[10%] md:max-w-[80%] md:px-[4%] md:pt-[8%] sm:max-w-full sm:px-[2%] sm:pt-[4%]`    
    const TourTitle = tw(TwTitle_MD)`text-white mb-[1.2rem] md:mb-[0.8rem] sm:mb-[0.4rem]`
    const TourDescription = tw(GrayP)`text-sink_gray tracking-[0.094rem] mb-[1.9rem] md:mb-[1rem] sm:mb-0`
    return (
        <>
            <TourBackground>
                <div tw='-z-10'>
                    <img src={TourBG} alt="" tw='w-full' />
                </div>
                <Overlay></Overlay>
                <TourContainer>
                    <div tw='mx-auto text-center 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:px-[10%]'>
                        <TourTitle>Watch the video tour</TourTitle>
                        <TourDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</TourDescription>
                    </div>
                    <div tw='mx-auto md:max-w-full md:w-full md:px-[35%] sm:max-w-full sm:w-full sm:px-[40%]'>
                        <img src={PlayImg} alt="" tw='md:max-w-full md:w-full sm:max-w-full sm:w-full' />
                    </div>
                </TourContainer>
            </TourBackground>
        </>
    )
}

export default VideoTour
