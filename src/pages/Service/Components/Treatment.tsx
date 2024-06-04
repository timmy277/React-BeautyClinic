
import tw from 'twin.macro'
import TreatmentBanner from '../image/banner/Animation22.png'
import { GrayP, TwSpan, TwTitle_MD } from '../../../components/Material'
import DoubleAngle from '../../../assets/website/angle-double-right.png' 
const Treatment = () => {
    const TreatmentContainer = tw.div`flex flex-row justify-between max-w-[71.25rem] mx-auto pt-[8.7rem] 2lg:max-w-full 2lg:px-[11%] lg:max-w-full lg:px-[12%] md:flex-col md:text-center md:pt-[5%] sm:flex-col sm:text-center sm:max-w-full sm:pt-[5%]`
    const TreatmentImageWrapper = tw.div`w-[29.688rem] h-[19.625rem] max-w-[55%] mt-[-1.9rem] lg:max-w-[50%] lg:w-full lg:h-full md:max-w-full md:w-full md:px-[10%]  md:mb-[7%] sm:max-w-full sm:w-full sm:px-[8%] sm:mb-[6%]`
    const TreatmentImage = tw.img`max-w-none lg:w-full lg:m-0 lg:md:h-auto md:w-[75%] md:max-w-[75%] md:h-auto md:mx-auto sm:w-[75%] sm:max-w-[75%] sm:mx-auto sm:h-auto`
    const TreatmentContent = tw.div`max-w-[29.688rem] flex flex-col 2lg:max-w-[45%] lg:max-w-[45%] md:max-w-full md:px-[5%] md:mb-[8%] md:items-center md:mx-auto sm:max-w-full sm:mb-[6%] sm:items-center sm:mx-auto xs:px-0`
    const TreatmentSpan = tw(TwSpan)`mb-[0.7rem] tracking-[0.01rem]`
    const TreatmentTitle = tw(TwTitle_MD)`max-w-[90%] mb-[0.8rem] tracking-[0.01rem] sm:max-w-full`
    const TreatmentDescription = tw(GrayP)`font-normal max-w-[30.188rem] tracking-[0.1039rem] mb-[1.4rem] md:max-w-[70%] md:mx-auto sm:max-w-[70%] sm:mx-auto`

    const Appointment = tw(GrayP)`text-dark_blue font-semibold tracking-[0.104rem]`

    return (
        <TreatmentContainer>
            <TreatmentContent>
                <TreatmentSpan>Skin Treatements</TreatmentSpan>
                <TreatmentTitle>Skin care and treatment by expert</TreatmentTitle>
                <TreatmentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</TreatmentDescription>
                <div tw='flex items-center '>
                    <Appointment>Make an Appointment</Appointment>
                    <div tw=' w-[1.563rem] ml-[0.9rem]'>
                        <img src={DoubleAngle} alt="" tw='w-full h-full'/>
                    </div>
                </div>
            </TreatmentContent>
            <TreatmentImageWrapper>
                <TreatmentImage src={TreatmentBanner} alt="TreatmentBanner" />
            </TreatmentImageWrapper>
        </TreatmentContainer>
    )
}

export default Treatment
