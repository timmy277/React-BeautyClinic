import tw from 'twin.macro'
import handshake from '../image/icon/handshake.png'
import brotherhood from '../image/icon/brotherhood.png'
import earth from '../image/icon/earth.png'
import doctor from '../image/icon/doctor.png'
import StatisticBG from'../image/background/BackgroundStatistic.png'
import { GrayP, TwTitle_MD } from '../../../components/Material/Material'

const Statistic = () => {
    const StatisticContainer = tw.div` mt-[8rem] pt-[7.4rem] mb-[40rem] relative`
    const BGStatisticWrapper = tw.div`absolute top-0 left-0 2xl:w-full -z-10`;
    const BGStatisticImg = tw.img`2xl:w-full` ;
    
    const StatisticContent = tw.div`flex justify-between max-w-[71.25rem] mx-auto pt-[9.938rem] md:pt-[6rem] sm:pt-[4rem] pr-[1.75rem]`
    const StatisticText = tw.div`max-w-[40%] pt-[0.9rem] pl-[0.25rem]`
    const Question = tw(TwTitle_MD)`text-white mb-[1.2rem] tracking-[0.02rem]`
    const Reason = tw(GrayP)`text-light_white font-normal`
    const Evidence = tw.div`w-[30.188rem] grid grid-cols-2 grid-rows-2 gap-x-[4.5rem] gap-y-[2.688rem]`
    const EvidenceItem = tw.div` flex items-center text-white `
    const Data = tw(TwTitle_MD)`text-white`
    const DataP = tw(GrayP)`text-light_white`
    const TrustCLinic = tw(DataP)`text-highlight_pink`
    return (
    <>
        <StatisticContainer>
            <StatisticContent>
                <BGStatisticWrapper>
                    <BGStatisticImg src={StatisticBG} alt="Statistic" />
                </BGStatisticWrapper>
                <StatisticText>
                    <Question>Why choosing us?</Question>
                    <Reason>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis.</Reason>
                </StatisticText>
                <Evidence>
                    <EvidenceItem>
                        <img src={handshake} alt="" />
                        <div>
                            <Data>100%</Data>
                            <TrustCLinic >trusted clinic</TrustCLinic>
                        </div>
                    </EvidenceItem>
                    <EvidenceItem>
                        <img src={brotherhood} alt="" />
                        <div>
                            <Data>99%</Data>
                            <DataP>customer love</DataP>
                        </div>
                    </EvidenceItem>
                    <EvidenceItem>
                        <img src={earth} alt="" />
                        <div>
                            <Data>75+</Data>
                            <DataP>asian branch</DataP>
                        </div>
                    </EvidenceItem>
                    <EvidenceItem>
                        <img src={doctor} alt="" />
                        <div>
                            <Data>1200+</Data>
                            <DataP>licensed worker</DataP>
                        </div>
                    </EvidenceItem>
                </Evidence>
            </StatisticContent>
        </StatisticContainer>
    </>
    )
}

export default Statistic
