import tw from 'twin.macro'
import { GrayP, TwSpan, TwTitle_MD } from '../../../../components/Material/Material'
import IntroBanner from '../../image/banner/unsplash_DE6rYp1nAho.png'
import PlayButton from '../../../../assets/website/PlayButton.png'
const Introduction = () => {
    const IntroductionContainer = tw.div`max-w-full pt-[8.1rem] mb-[-6.6rem] 2lg:max-w-full lg:max-w-full md:pt-[2rem] sm:pt-[2rem]`
    const IntroText = tw.div`max-w-[71.25rem] flex flex-col mx-auto 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:px-[11%]  md:text-center sm:text-center`
    const AboutSpan = tw(TwSpan)`mb-[0.7rem]`
    const AboutTitle = tw(TwTitle_MD)`max-w-[65%] mb-[1.1rem] md:mx-auto sm:mx-auto 2lg:max-w-[70%] lg:max-w-[75%]`
    const AboutDescription = tw(GrayP)`max-w-[60%] tracking-[0.095rem] md:mx-auto sm:mx-auto lg:max-w-[70%]`
    const BannerImgWrapper = tw.div``
    const AboutBanner = tw.div`max-w-none w-full relative 2lg:px-[5%] lg:px-[5%]` 
    const AboutBannerImg = tw.img`max-w-full mx-auto mt-[1rem] `
    return (
        <>
            <IntroductionContainer>
                <IntroText>
                    <AboutSpan>About</AboutSpan>
                    <AboutTitle>We are a leading beauty clinic that has been around since 2002</AboutTitle>
                    <AboutDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</AboutDescription>
                </IntroText>
                <BannerImgWrapper>
                    <AboutBanner>
                        <AboutBannerImg src={IntroBanner} alt="" />
                        <div tw="absolute z-10 inset-0 flex flex-col items-center transform -translate-y-[20%] top-1/2">
                            <img tw="w-[5.5rem]  max-w-full 2lg:w-[6%] lg:w-[6%] md:w-[6%] sm:w-[6%]" src={PlayButton} alt="" />
                        </div>
                    </AboutBanner>
                </BannerImgWrapper>
            </IntroductionContainer>
        </>
    )
}

export default Introduction