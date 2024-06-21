
import tw from 'twin.macro'
import { GrayP, TwButton, TwSpan, TwTitle_MD } from './Material'
import ContactUsImg from '../assets/banner/ContactAnimations.png'
import BackGroundContact from '../assets/background/BackgroundBubble2.png'
const ContactUs = () => {
    const ContactUsWrapper = tw.div`w-full relative`
    const ContactUsContainer = tw.div`flex flex-row justify-between max-w-[71.25rem] mx-auto pt-[9.1rem] 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:px-[10%] md:pt-0 md:flex-col-reverse md:items-center sm:flex-col-reverse sm:items-center sm:pt-0`
    const ContactUsBanner = tw.div`max-w-full mt-[4.6rem] md:mt-0 md:w-full md:px-[10%]  sm:mt-0 sm:w-full sm:px-[10%]`
    const BannerImg = tw.img`mt-[5.2rem] md:w-full sm:w-full`
    const ContactUsContent = tw.div`flex flex-col ml-[6.2rem] max-w-[32.5rem] md:ml-0 md:text-center md:max-w-full md:px-[5%] md:w-full sm:ml-0 sm:text-center sm:max-w-full sm:w-full sm:px-[4%]`
    const ContactUsSpan = tw(TwSpan)``
    const ContactUsTitle = tw(TwTitle_MD)`mb-[1.2rem] mt-[0.7rem] tracking-[0.02rem] max-w-[25.25rem] md:max-w-none sm:max-w-none`
    const ContactUsDescription = tw(GrayP)`font-normal tracking-[0.1056em] mb-[2.9rem] `
    const ContactUsForm = tw.form`flex flex-col max-w-full `
    const FormInput = tw.input`border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-lighter_gray font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full w-full mb-[2.395rem] items-center`
    const Email = tw(FormInput)`pt-[0.869rem] pb-[1.029rem]`
    const LastName = tw(FormInput)`pl-[1.95rem]`
    const Inquiry = tw(FormInput)`pt-[2.383rem] pb-[13.575rem]`
    const InputName = tw.div`flex flex-row gap-8 md:flex-col md:gap-0 sm:flex-col sm:gap-0`
    const InputEmail = tw.div``
    const ButtonSendMessage = tw(TwButton)`px-[3.5rem] pb-[1.275rem] font-medium md:mx-auto sm:mx-auto`
    const BackgroundContact = tw.div`absolute top-[-4rem] left-0 2xl:w-full -z-10 2xl:max-w-full xl:max-w-full xl:w-full`
    const BackgroundContactImg = tw.img`2xl:w-full xl:w-full md:max-w-full sm:max-w-full`
    return (
        <ContactUsWrapper>
            <BackgroundContact>
                <BackgroundContactImg src={BackGroundContact} alt="BackgroundContact" />
            </BackgroundContact>
            <ContactUsContainer>
                <ContactUsBanner data-aos='zoom-in'>
                    <BannerImg src={ContactUsImg} alt="" />
                </ContactUsBanner>
                <ContactUsContent data-aos="zoom-in">
                    <ContactUsSpan>Contact Us</ContactUsSpan>
                    <ContactUsTitle>Send your inquiry to our expert team</ContactUsTitle>
                    <ContactUsDescription>Lorem ipsum dolor sit amet nulla turapis tellus.</ContactUsDescription>
                    <ContactUsForm action="">
                        <InputName>
                            <FormInput type="text" placeholder='First name' />
                            <LastName type="text" placeholder='Last name' />
                        </InputName>
                        <InputEmail>
                            <Email type="text" placeholder='Email address' />
                            <FormInput type="text" placeholder='Subject message' />
                            <Inquiry type="text" placeholder='Your inquiry here' />
                        </InputEmail>
                    </ContactUsForm>
                    <ButtonSendMessage>Send Message</ButtonSendMessage>
                </ContactUsContent>
            </ContactUsContainer>
        </ContactUsWrapper>
    )
}

export default ContactUs
