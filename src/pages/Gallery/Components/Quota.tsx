import tw from'twin.macro'
import { GrayP, TwButton, TwSpan, TwTitle_MD } from '../../../components/Material'

const Quota = () => {
    const QuotaContainer = tw.div`max-w-[71.25rem] flex mx-auto pt-[7.5rem] items-center justify-between`
    const QuotaText = tw.div`max-w-[55%]`
    const QuotaSpan = tw(TwSpan)``
    const QuotaTitle = tw(TwTitle_MD)`mt-[0.6rem] mb-[1.38rem]  tracking-[0.008rem]`
    const QuotaDescription = tw(GrayP)`tracking-[0.094rem] max-w-[90%]` 
    const QuotaButton = tw(TwButton)`mr-[3.6rem] mt-[1rem] mr-[3.2rem] mb-[1.1rem] ml-[3.4rem]`
    return (
        <>
            <QuotaContainer>
                <QuotaText>
                    <QuotaSpan>Get The Quota</QuotaSpan>
                    <QuotaTitle>Want to be handled by our professional team immediately?</QuotaTitle>
                    <QuotaDescription>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</QuotaDescription>
                </QuotaText>
                <div>
                    <QuotaButton>Make an Appointment</QuotaButton>
                </div>
            </QuotaContainer>
        </>
    )
}

export default Quota
