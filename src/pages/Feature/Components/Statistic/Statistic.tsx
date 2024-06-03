import tw from 'twin.macro'
import handshake from '../../image/icon/handshake.png'
import brotherhood from '../../image/icon/brotherhood.png'
import earth from '../../image/icon/earth.png'
import doctor from '../../image/icon/doctor.png'
// import StatisticBG from'../image/background/BackgroundStatistic.png'
import { GrayP, TwTitle_MD } from '../../../../components/Material/Material'

const Statistic = () => {
    const StatisticContainer = tw.div` bg-[url("./BackgroundStatistic.png")] h-[43.594rem] bg-top bg-cover bg-no-repeat mt-[8rem] pt-[7.4rem] mb-[6.8rem] relative 2lg:pt-[8%] lg:pt-[8%] md:pt-[25%] sm:pt-[30%] 2xl:bg-cover xl:bg-cover xl:w-full 2xl:w-full  xl:max-h-full 2xl:max-h-full`

    const StatisticContent = tw.div`flex justify-between max-w-[71.25rem] mx-auto pt-[9.838rem] pr-[2.55rem] 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:px-[10%] md:flex-col md:pt-0 md:items-center md:pr-0 sm:flex-col sm:pt-0  sm:items-center sm:pr-0`
    const StatisticText = tw.div`max-w-[43%] pt-[0.9rem] pl-[0.25rem] md:text-center md:max-w-full md:mx-[3%] md:mb-[4%] sm:text-center sm:mb-[4%] sm:max-w-full `
    const Question = tw(TwTitle_MD)`text-white mb-[1.3rem] tracking-[0.02rem]`
    const Reason = tw(GrayP)`text-light_white font-normal tracking-[0.104rem]  md:max-w-[60%] md:mx-auto  sm:max-w-[60%] sm:mx-auto `
    const Evidence = tw.div` grid grid-cols-2 grid-rows-2 gap-x-[4.6rem] gap-y-[2.5rem] mt-[-0.2rem] md:max-w-full md:gap-x-[5%] md:gap-y-[5%] sm:max-w-full sm:gap-x-[5%] sm:gap-y-[5%]`
    const EvidenceItem = tw.div` flex items-center justify-center text-white `
    const CustomLoveItem =tw(EvidenceItem)`ml-[-0.2rem] mt-[-0.2rem]`
    const ItemImg = tw.img`max-w-full mr-[0.8rem]`
    const DataContainer = tw.div`flex flex-col justify-between mt-[0.1rem]`
    const TrustedClinicContainer = tw(DataContainer)``
    const CustomLoveContainer = tw(DataContainer)`mt-[0.4rem] ml-[-0.1rem]`
    const AsianBranchContainer = tw(DataContainer)`mt-[0.4rem]`
    const WorkerContainer = tw(DataContainer)`mt-[0.4rem]`
    const Data = tw(TwTitle_MD)`text-white mb-[-0.3rem]`
    const DataP = tw(GrayP)`text-light_white tracking-[0.01rem]`
    const TrustCLinic = tw(DataP)`text-highlight_pink`
    return (
    <>
        <StatisticContainer>
            <StatisticContent>
                {/* <BGStatisticWrapper>
                    <BGStatisticImg src={StatisticBG} alt="Statistic" />
                </BGStatisticWrapper> */}
                <StatisticText>
                    <Question>Why choosing us?</Question>
                    <Reason>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                        purus sit amet luctus venenatis.</Reason>
                </StatisticText>
                <Evidence>
                    <EvidenceItem>
                        <ItemImg src={handshake} alt="" />
                        <TrustedClinicContainer>
                            <Data>100%</Data>
                            <TrustCLinic >trusted clinic</TrustCLinic>
                        </TrustedClinicContainer>
                    </EvidenceItem>
                    <CustomLoveItem>
                        <ItemImg src={brotherhood} alt="" />
                        <CustomLoveContainer>
                            <Data>99%</Data>
                            <DataP>customer love</DataP>
                        </CustomLoveContainer>
                    </CustomLoveItem>
                    <EvidenceItem>
                        <ItemImg src={earth} alt="" />
                        <AsianBranchContainer>
                            <Data>75+</Data>
                            <DataP>asian branch</DataP>
                        </AsianBranchContainer>
                    </EvidenceItem>
                    <EvidenceItem>
                        <ItemImg src={doctor} alt="" />
                        <WorkerContainer>
                            <Data>1.200+</Data>
                            <DataP>licensed worker</DataP>
                        </WorkerContainer>
                    </EvidenceItem>
                </Evidence>
            </StatisticContent>
        </StatisticContainer>
    </>
    )
}

export default Statistic
