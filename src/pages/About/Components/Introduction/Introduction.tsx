import tw from 'twin.macro'
import { GrayP, TwSpan, TwTitle_MD } from '../../../../components/Material/Material'
import IntroBanner from '../../image/banner/unsplash_DE6rYp1nAho.png'
import PlayButton from '../../../../assets/website/PlayButton.png'
const Introduction = () => {
    const IntroductionContainer = tw.div`max-w-[71.25rem] mx-auto pt-[8.1rem] lg:max-w-full lg:px-[8%] md:pt-[22rem] sm:pt-[16rem]`
    const IntroText = tw.div` flex flex-col`
    const AboutSpan = tw(TwSpan)`mb-[0.7rem]`
    const AboutTitle = tw(TwTitle_MD)`max-w-[65%] mb-[1.1rem] `
    const AboutDescription = tw(GrayP)`max-w-[60%] tracking-[0.095rem]`
    const BannerImgWrapper = tw.div``
    const AboutBanner = tw.div`max-w-full`
    const AboutBannerImg = tw.img`max-w-full`
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
                    </AboutBanner>
                    <div>
                        <img src={PlayButton} alt="" />
                    </div>
                </BannerImgWrapper>
            </IntroductionContainer>
        </>
    )
}

export default Introduction