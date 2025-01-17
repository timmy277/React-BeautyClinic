
import tw from 'twin.macro'
import AboutUsBanner from '../../../assets/banner/Illustration-1.png'
import { GrayP, TwButton, TwSpan, TwTitle_MD } from '../../../components/Material'

const FeatureAboutUs = () => {
    const AboutUsContainer = tw.div`flex flex-row justify-between max-w-[71.25rem] mx-auto mt-[40rem] pt-[21rem] 2lg:pt-[24%] 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:pt-[24%] lg:px-[8%] md:flex-col-reverse md:text-center md:pt-[20rem] sm:flex-col-reverse sm:text-center sm:max-w-full sm:pt-[20rem]`
    const AboutUsImageWrapper = tw.div`w-[30.625rem] h-[18.917rem] max-w-[55%] lg:max-w-[50%] lg:w-full lg:h-full  md:max-w-full md:w-full md:mx-auto md:px-[10%]  md:mb-[7%] sm:max-w-full sm:w-full sm:mx-auto sm:px-[8%] sm:mb-[6%]`
    const AboutUsImage = tw.img`max-w-none lg:w-full lg:m-0 md:w-full md:max-w-full md:mx-auto  sm:w-full sm:max-w-full sm:mx-auto`
    const AboutUsContent = tw.div`max-w-[45%] flex flex-col pl-[1.9rem] md:max-w-full md:px-[5%] md:mb-[8%] md:items-center md:mx-auto sm:max-w-full  sm:px-[4%] sm:mb-[6%] sm:items-center sm:mx-auto xs:px-0`
    const AboutUsSpan = tw(TwSpan)`mb-[0.7rem]`
    const AboutUsTitle = tw(TwTitle_MD)`mb-[0.8rem]`
    const AboutUsDescription = tw(GrayP)`font-normal max-w-[30.188rem] tracking-[0.1039rem] mb-[3rem] md:max-w-[90%] md:mx-auto sm:max-w-[90%] sm:mx-auto`

    const ButtonLearnMore = tw(TwButton)`pt-[1.023rem] pb-[1.041rem] pl-[3.063rem] pr-[2.9rem] shadow-sm xs:py-[4%] xs:px-[9%] `
    return (
        <AboutUsContainer>
            <AboutUsImageWrapper>
                <AboutUsImage src={AboutUsBanner} alt="AboutUsBanner" />
            </AboutUsImageWrapper>
            <AboutUsContent>
                <AboutUsSpan>About Us</AboutUsSpan>
                <AboutUsTitle>We are the best beauty clinic</AboutUsTitle>
                <AboutUsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                </AboutUsDescription>
                <ButtonLearnMore>Learn More</ButtonLearnMore>
            </AboutUsContent>
        </AboutUsContainer>
    )
}

export default FeatureAboutUs
