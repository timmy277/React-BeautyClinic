
import tw from 'twin.macro'
import MissionBanner from '../image/banner/Illustration.png'
import { GrayP, TwSpan, TwTitle_MD } from '../../../components/Material'

const Mission = () => {
    const MissionContainer = tw.div`flex flex-row justify-between max-w-[71.25rem] mx-auto pt-[5.9rem] 2lg:max-w-full 2lg:px-[11%] lg:max-w-full lg:px-[12%] md:flex-col md:text-center md:pt-[15rem] sm:flex-col sm:text-center sm:max-w-full sm:pt-[10rem]`
    const MissionImageWrapper = tw.div`w-[29.688rem] h-[19.625rem] max-w-[55%] pt-[0.9rem] pl-[1.3rem]  md:max-w-full md:w-full md:px-[10%]  md:mb-[7%] sm:max-w-full sm:w-full sm:px-[8%] sm:mb-[6%]`
    const MissionImage = tw.img`w-[26.893rem] h-[16.357rem] md:w-[75%] md:max-w-[75%] md:h-auto md:mx-auto sm:w-[75%] sm:max-w-[75%] sm:mx-auto sm:h-auto`
    const MissionContent = tw.div`max-w-[45%] flex flex-col md:max-w-full md:px-[5%] md:mb-[8%] md:items-center md:mx-auto sm:max-w-full  sm:px-[4%] sm:mb-[6%] sm:items-center sm:mx-auto xs:px-0`
    const MissionSpan = tw(TwSpan)`mb-[0.7rem] tracking-[0.01rem]`
    const MissionTitle = tw(TwTitle_MD)`mb-[0.8rem] tracking-[0.01rem] sm:max-w-[80%]`
    const MissionDescription = tw(GrayP)`font-normal max-w-[30.188rem] tracking-[0.1039rem] mb-[3rem] md:max-w-[70%] md:mx-auto sm:max-w-[70%] sm:mx-auto`

    return (
        <MissionContainer>
            <MissionContent>
                <MissionSpan>Our Mission</MissionSpan>
                <MissionTitle>Special & premium service to any clients</MissionTitle>
                <MissionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                <br />
                <br />
                Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                </MissionDescription>
            </MissionContent>
            <MissionImageWrapper>
                <MissionImage src={MissionBanner} alt="MissionBanner" />
            </MissionImageWrapper>
        </MissionContainer>
    )
}

export default Mission
