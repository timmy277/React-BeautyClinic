import React from 'react'
import tw from 'twin.macro'
import AboutUsBanner from '../../assets/banner/unsplash_LRXYS0tSyGc.png'
import { GrayP, TwButton, TwSpan, TwTitle_MD } from '../Material/Material'
import PlayVideo from '../../assets/website/PlayButton.png'

const AboutUs = () => {
    const AboutUsContainer = tw.div`flex flex-row justify-between max-w-[71.25rem] mx-auto pt-[8.5rem] lg:max-w-full lg:px-[5%] md:flex-col md:text-center sm:flex-col sm:text-center sm:max-w-full`
    const AboutUsContent = tw.div` max-w-[55%] flex flex-col   md:max-w-full md:px-[5%] md:items-center md:mx-auto sm:max-w-full  sm:px-[4%] sm:items-center sm:mx-auto`
    const AboutUsSpan = tw(TwSpan)`mb-[0.7rem]`
    const AboutUsTitle = tw(TwTitle_MD)`mb-[1.2rem]`
    const AboutUsDescription = tw(GrayP)`font-normal max-w-[30.188rem] tracking-[0.1039rem] mb-[3.4rem] md:max-w-[90%] md:mx-auto sm:max-w-[90%] sm:mx-auto`
    const AboutUsImageWrapper = tw.div`w-[29.75rem] h-[21.875rem] max-w-[45%] lg:max-w-[50%] lg:w-full lg:h-full  md:max-w-full md:w-full md:mx-auto sm:max-w-full sm:w-full sm:mx-auto`
    const AboutUsImage = tw.img`max-w-none mt-[-2rem] ml-[-4.7rem] lg:w-full lg:m-0 md:w-full md:max-w-full md:mx-auto  sm:w-full sm:max-w-full sm:mx-auto`
    const GroupButton = tw.div`flex flex-row justify-between max-w-[26.75rem] md:gap-[2rem] md:max-w-[80%] md:px-[10%] md:py-[2%] sm:gap-[1rem] sm:max-w-[80%] sm:px-[6%] sm:py-[2%]`
    const ButtonLearnMore = tw(TwButton)`pt-[1.023rem] pb-[1.041rem] pl-[3.063rem] pr-[2.9rem] shadow-sm`
    const ButtonWatchVideo = tw.div`flex flex-row items-center `
    const ButtonPlay = tw.img`mr-[0.5rem]`
    const BtnWatch = tw.button`ml-[0.4rem] text-light_gray text-base leading-6 tracking-widest font-semibold md:text-sm sm:text-xs`
    return (
        <AboutUsContainer>
            <AboutUsContent>
                <AboutUsSpan>About Us</AboutUsSpan>
                <AboutUsTitle>We are the best beauty clinic</AboutUsTitle>
                <AboutUsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat  facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.<br/> <br /> Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</AboutUsDescription>
                <GroupButton>
                    <ButtonLearnMore>Learn More</ButtonLearnMore>
                    <ButtonWatchVideo>
                        <ButtonPlay src={PlayVideo} alt="" />
                        <BtnWatch>Watch Video</BtnWatch>
                    </ButtonWatchVideo>
                </GroupButton>
            </AboutUsContent>
            <AboutUsImageWrapper>
                <AboutUsImage src={AboutUsBanner} alt="AboutUsBanner" />
            </AboutUsImageWrapper>
        </AboutUsContainer>
    )
}

export default AboutUs
