import tw from 'twin.macro'
import Phone from '../../image/others/phone-volume.png'
import { GrayP, TwTitle_MD } from '../../../../components/Material/Material'


const RequestCall = () => {
    const CallContainer = tw.div`max-w-[71.25rem] pt-[10.6rem] mb-[8.2rem] mx-auto flex justify-between items-center`
    const CallTitle = tw(TwTitle_MD)`mb-[1rem]`
    const CallDescription = tw(GrayP)``
    const DescriptionSpan = tw.span`font-semibold text-dark_blue`

    const CallInput = tw.input`relative w-full h-[4.563rem] border border-solid border-[#D9DDFE] rounded-[1.563rem] font-poppins text-light_gray text-base leading-6 tracking-widest font-medium md:text-sm sm:text-xs pt-[1.438rem] pb-[1.375rem] pl-[2.313rem] `
    const CallButton = tw.button`z-10 h-[4.563rem] w-[7.063rem] bg-light_pink  absolute right-[0] rounded-e-[1.563rem]`
    return (
        <>
            <CallContainer>
                <div tw="flex flex-col max-w-[24.438rem]">
                    <CallTitle>Request call services</CallTitle>
                    <CallDescription>Lorem ipsum dolor sit amet, consect adipiscing elit <DescriptionSpan>Contact Us.</DescriptionSpan></CallDescription>
                </div>
                <div tw="max-w-[41.125rem] w-full pt-[0.9rem] relative">
                    <CallInput type="text" placeholder='Insert your phone number here ...'/>
                    <CallButton>
                        <img src={Phone} alt="" tw="ml-[2.1rem]"/>
                    </CallButton>
                    <p tw="text-right font-poppins font-normal text-xs leading-[1.125rem] tracking-[0.08rem] italic text-light_gray mt-[0.6rem]">Toll free for our coverage areas.</p>
                </div>
            </CallContainer>
        </>
    )
}

export default RequestCall
