import tw from'twin.macro'
import { GrayP, TwButton, TwSpan, TwTitle_MD } from '../../../components/Material'
import QuotaBG from '../image/background/BackgroundBubble.png'
const Quota = () => {
    const QuotaContainer = tw.div`max-w-[71.25rem] flex mx-auto pt-[7.5rem] pb-8 items-center justify-between 2lg:max-w-full 2lg:px-[12%] lg:max-w-full lg:px-[11%] md:flex-col md:px-[10%] md:pt-[3%] sm:flex-col sm:px-[10%] sm:pt-[3%]`
    const QuotaText = tw.div`max-w-[55%] md:text-center md:mb-[5%] sm:text-center sm:mb-[5%] md:max-w-[90%] sm:max-w-[90%]`
    const QuotaSpan = tw(TwSpan)``
    const QuotaTitle = tw(TwTitle_MD)`mt-[0.6rem] mb-[1.38rem]  tracking-[0.008rem]`
    const QuotaDescription = tw(GrayP)`tracking-[0.094rem] max-w-[90%] md:mx-auto sm:mx-auto` 
    const QuotaButton = tw(TwButton)`mr-[3.6rem] pt-[1rem] pr-[3.2rem] pb-[1.1rem] pl-[3.4rem] lg:mr-[2.5rem] md:mx-auto md:w-full md:max-w-full md:px-[5%] sm:mx-auto sm:max-w-full sm:w-full sm:px-[5%] xs:max-w-none xs:text-[0.5rem] xs:py-[6%] xs:mx-auto xs:min-w-[8.125rem]`
    return (
        <>
            <div tw='relative max-w-full'>
                <QuotaContainer>
                    <div tw="absolute top-[8rem] right-0 -z-10 2xl:w-full xl:w-full">
                        <img src={QuotaBG} alt="" tw='2xl:w-full xl:w-full'/>
                    </div>
                    <QuotaText>
                        <QuotaSpan>Get The Quota</QuotaSpan>
                        <QuotaTitle>Want to be handled by our professional team immediately?</QuotaTitle>
                        <QuotaDescription>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </QuotaDescription>
                    </QuotaText>
                    <div tw='md:max-w-full md:w-full md:px-[30%] sm:max-w-full sm:w-full sm:px-[27%] xs:px-[15%] '>
                        <QuotaButton>Make an Appointment</QuotaButton>
                    </div>
                </QuotaContainer>
            </div>
        </>
    )
}

export default Quota
