
import tw from 'twin.macro'
import ContactUsImg from '../image/ContactAnimations.png'
import { GrayP, TwButton, TwSpan, TwTitle_MD } from '../../../components/Material'
import BackGroundContact from '../image/BackgroundBubble.png'
const ContactForm = () => {
    const ContactUsWrapper = tw.div`w-full relative`
    const ContactUsContainer = tw.div`flex flex-row justify-between max-w-[71.25rem] pt-[0.5rem]  md:pt-0 md:flex-col-reverse md:items-center sm:flex-col-reverse sm:items-center sm:pt-0`
    const ContactUsBanner = tw.div`max-w-full md:mt-0 md:w-full md:px-[10%]  sm:mt-0 sm:w-full sm:px-[10%]`
    const BannerImg = tw.img`md:w-full sm:w-full`
    const ContactUsContent = tw.div`flex flex-col pt-[1.4rem] max-w-[32.5rem] md:ml-0 md:text-center md:max-w-full md:px-[5%] md:w-full sm:ml-0 sm:text-center sm:max-w-full sm:w-full sm:px-[4%]`
    const ContactUsSpan = tw(TwSpan)`md:mx-auto sm:mx-auto`
    const ContactUsTitle = tw(TwTitle_MD)`mb-[1.2rem] mt-[0.2rem] tracking-[0.012rem] max-w-[38.438rem] md:max-w-none sm:max-w-none`
    const ContactUsDescription = tw(GrayP)`max-w-[25.438rem] font-normal tracking-[0.1056em] mt-[0.6rem] mr-[1.3rem] mb-[2.9rem] md:text-center sm:text-center`
    const ContactUsForm = tw.form`flex flex-col max-w-full `    
    const FormInput = tw.input`border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-lighter_gray font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full w-full mb-[2.395rem] items-center`
    const Email = tw(FormInput)`pt-[0.869rem] pb-[1.029rem]`
    const LastName = tw(FormInput)`pl-[1.75rem] max-w-[15.138rem] 2lg:max-w-full lg:max-w-full md:max-w-full sm:max-w-full`
    const Subject = tw(FormInput)`pt-[0.963rem]`    
    const Inquiry = tw(FormInput)`pt-[2.383rem] pb-[12.475rem]`
    const InputName = tw.div`flex flex-row gap-[2.224rem] md:flex-col md:gap-0 sm:flex-col sm:gap-0`
    const InputEmail = tw.div``
    const ButtonSendMessage = tw(TwButton)`px-[3.5rem] mt-[1.1rem] pb-[1.275rem] font-medium md:mx-auto sm:mx-auto`
    const BackgroundContact = tw.div`absolute top-[13.25rem] left-0 2xl:w-full -z-10 2xl:max-w-full xl:max-w-full xl:w-full`
    const BackgroundContactImg = tw.img`2xl:w-full 2xl:max-w-full xl:max-w-full xl:w-full md:max-w-full sm:max-w-full`
    return (
        <ContactUsWrapper>
            <BackgroundContact>
                <BackgroundContactImg src={BackGroundContact} alt="BackgroundContact" />
            </BackgroundContact>
            <div tw='max-w-[71.25rem] flex flex-col mx-auto pt-[8.1rem] 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:px-[10%] md:pt-4 sm:pt-4'>
                <div tw='flex flex-col md:max-w-full md:px-[5%] md:w-full  sm:max-w-full sm:w-full sm:px-[4%]'>
                    <ContactUsSpan>Contact Us</ContactUsSpan>
                    <div tw='flex justify-between items-center md:flex-col sm:flex-col lg:gap-4'>
                        <ContactUsTitle>Contact service for our customers</ContactUsTitle>
                        <ContactUsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</ContactUsDescription>
                    </div>
                </div>  
                <ContactUsContainer>
                    <ContactUsBanner>
                        <BannerImg src={ContactUsImg} alt="" />
                    </ContactUsBanner>
                    <ContactUsContent>
                        <ContactUsForm action="">
                            <InputName>
                                <FormInput type="text" placeholder='First name' />
                                <LastName type="text" placeholder='Last name' />
                            </InputName>
                            <InputEmail>
                                <Email type="text" placeholder='Email address' />
                                <Subject type="text" placeholder='Subject message' />
                                <Inquiry type="text" placeholder='Your inquiry here' />
                            </InputEmail>
                        </ContactUsForm>
                        <ButtonSendMessage>Send Message</ButtonSendMessage>
                    </ContactUsContent>
                </ContactUsContainer>
            </div>
        </ContactUsWrapper>
    )
}

export default ContactForm
