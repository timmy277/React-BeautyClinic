
import 'twin.macro'
import tw from 'twin.macro'
import ServiceListItem from '../ServiceListItem/ServiceListItem'
import { TwTitle_MD, TwSpan, GrayP } from '../../../../../components/Material/Material'
import BackGroundBubble from '../../../image/background/BackgroundBubble.png'
const MainService = () => {
    const ServiceWrapper = tw.div`relative`
    const ServiceContainer = tw.div`max-w-[71.25rem] pt-[8rem] mx-auto flex flex-col lg:max-w-full lg:px-[5%] md:px-[6%] sm:px-[6%]`
    const ServiceIntroduction = tw.div`text-center mx-auto max-w-[53rem] mb-[5.3rem]`
    const ServiceSpan = tw(TwSpan)`tracking-[0rem]`
    const ServiceTitle = tw(TwTitle_MD)`max-w-[50%] mx-auto mt-[0.725rem] xs:max-w-[80%]`
    const ServiceDescription = tw(GrayP)`mt-[1.1rem] font-normal tracking-widest mx-auto md:max-w-[80%] sm:max-w-[75%]`
    const BackGroundService = tw.div`absolute top-[40.2rem] right-0 2xl:w-full -z-10`
    const BackGroundServiceImg = tw.img`2xl:w-full`
    return (
        <ServiceWrapper>
            <ServiceContainer>
                <ServiceIntroduction>
                    <ServiceSpan>Main Services</ServiceSpan>
                    <ServiceTitle>Learn services to focus on your beauty</ServiceTitle>
                    <ServiceDescription>Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</ServiceDescription>
                </ServiceIntroduction>
                <ServiceListItem/>
            </ServiceContainer>
            <BackGroundService>
                <BackGroundServiceImg src={BackGroundBubble} alt="BackGroundBubble" />
            </BackGroundService>
        </ServiceWrapper>
    )
}

export default MainService