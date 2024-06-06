
import tw from 'twin.macro'
import ConsultationBanner from '../image/banner/Animation12.png'
import { GrayP, TwSpan, TwTitle_MD } from '../../../components/Material'
import DoubleAngle from '../../../assets/website/angle-double-right.png' 

const Consultation = () => {
    const ConsultationContainer = tw.div` flex flex-row justify-between max-w-[71.25rem] max-h-[19.625rem] mx-auto pt-[2.9rem] 2lg:max-w-full 2lg:px-[11%] lg:max-w-full lg:px-[11%] md:flex-col-reverse md:text-center md:pt-[65%] sm:flex-col-reverse sm:text-center sm:max-w-full sm:pt-[72%]`
    const ConsultationImageWrapper = tw.div`w-[29.688rem] h-[19.625rem] max-w-[55%] mt-[-1.8rem] lg:max-w-[50%] lg:w-full lg:h-full md:max-w-full md:w-full md:px-[10%]  md:mb-[7%] sm:max-w-full sm:w-full sm:px-[8%] sm:mb-[6%]`
    const ConsultationImage = tw.img`max-w-none lg:w-full lg:m-0 lg:md:h-auto md:w-[75%] md:max-w-[75%] md:h-auto md:mx-auto  sm:w-[75%] sm:max-w-[75%] sm:mx-auto sm:h-auto`
    const ConsultationContent = tw.div`max-w-[45%]  flex flex-col pl-[2.2rem] lg:max-w-[50%] md:max-w-full md:px-[5%] md:mb-[8%] md:items-center md:mx-auto sm:max-w-full sm:mb-[8%] sm:items-center sm:mx-auto xs:px-0`
    const ConsultationSpan = tw(TwSpan)`mb-[0.8rem] tracking-[0.01rem]`
    const ConsultationTitle = tw(TwTitle_MD)` tracking-[0.014rem] mb-[0.8rem] sm:max-w-full `
    const ConsultationDescription = tw(GrayP)`font-normal max-w-[30.188rem] tracking-[0.103rem] mb-[1.4rem] md:max-w-[70%] md:mx-auto sm:max-w-[70%] sm:mx-auto`

    const Appointment = tw(GrayP)`text-dark_blue font-semibold tracking-[0.104rem]`

    return (
        <ConsultationContainer>
            <ConsultationImageWrapper>
                <ConsultationImage src={ConsultationBanner} alt="ConsultationBanner" />
            </ConsultationImageWrapper>
            <ConsultationContent>
                <ConsultationSpan>Beauty Consultation</ConsultationSpan>
                <ConsultationTitle>We services beauty consultation</ConsultationTitle>
                <ConsultationDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</ConsultationDescription>
                <div tw='flex items-center '>
                    <Appointment>Make an Appointment</Appointment>
                    <div tw=' w-[1.563rem] ml-[0.9rem]'>
                        <img src={DoubleAngle} alt="" tw='w-full h-full'/>
                    </div>
                </div>
            </ConsultationContent>
        </ConsultationContainer>
    )
}

export default Consultation
