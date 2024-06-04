import tw from "twin.macro";
import { GrayP, TwSpan, TwTitle_MD } from "../../../components/Material";
import ServiceBanner1 from '../image/banner/unsplash_5TJ0Hoy5FLY.png'
import ServiceBanner2 from '../image/banner/unsplash_ZOT2Mewzmh8.png'
import ServiceBanner3 from '../image/banner/unsplash_gzfIO69Q6eM.png'
import ServiceBanner4 from '../image/banner/unsplash_pTrhfmj2jDA2.png'
import ServiceBackground from '../image/background/BubbleBG.png'

const OurService = () => {

    const ServiceBG = tw.div`relative max-w-full`
    const ServiceContainer = tw.div`max-w-[68.75rem] mx-auto flex flex-col pt-[8.1rem] mb-[7.7rem] 2lg:max-w-full 2lg:px-[12%] lg:max-w-full lg:px-[12%] md:px-[10%] sm:px-[10%]`
    const ServiceContent = tw.div`max-w-full flex flex-col mb-[1.6rem] text-center md:max-w-full md:px-[5%] md:mb-[6%] md:items-center md:mx-auto sm:max-w-full  sm:px-[4%] sm:mb-[6%] sm:items-center sm:mx-auto xs:px-0`
    const ServiceSpan = tw(TwSpan)`mb-[0.7rem] tracking-[0.01rem]`
    const ServiceTitle = tw(TwTitle_MD)`mb-[1.5rem] tracking-[0.01rem] sm:max-w-[80%]`
    const ServiceDescription = tw(GrayP)`font-normal tracking-[0.1039rem] mb-[3rem] md:max-w-[70%] md:mx-auto sm:max-w-[70%] sm:mx-auto`
    const GridImg = tw.div`flex flex-col justify-between gap-[4.25rem] md:gap-[3.25rem] sm:gap-[2rem] xs:gap-[1.25rem]`
    const GroupImg = tw.div`flex justify-between gap-[5.25rem] md:gap-[4.25rem] sm:gap-[3rem] xs:gap-[1.75rem]` 
    return (
        <>
            <ServiceBG>
                <div tw="absolute top-[6.2rem] right-0 -z-10 2xl:w-full xl:w-full">
                    <img src={ServiceBackground} alt="" tw='2xl:w-full xl:w-full'/>
                </div>
                <ServiceContainer>
                    <ServiceContent>
                        <ServiceSpan>Our Services</ServiceSpan>
                        <ServiceTitle>We focus on your beauty</ServiceTitle>
                        <ServiceDescription>Lorem ipsum dolor sit amet</ServiceDescription>
                    </ServiceContent>
                    <GridImg>
                        <GroupImg>
                            <div>
                                <img src={ServiceBanner1} alt="" />
                            </div>
                            <div>
                                <img src={ServiceBanner2} alt="" />
                            </div>
                        </GroupImg>
                        <GroupImg>
                            <div>
                                <img src={ServiceBanner3} alt="" />
                            </div>
                            <div>
                                <img src={ServiceBanner4} alt="" />
                            </div>
                        </GroupImg>
                    </GridImg>
                </ServiceContainer>
            </ServiceBG>
        </>
    )
}

export default OurService 
