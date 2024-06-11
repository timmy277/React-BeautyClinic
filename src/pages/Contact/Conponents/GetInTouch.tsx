import tw from "twin.macro";
import { GrayP, TwSpan, TwTitle_MD } from "../../../components/Material";
import LocationImg from '../image/map-marker-alt.png'
import PhoneImg from '../image/phone-alt.png'
import EmailImg from '../image/mail-bulk.png'

const GetInTouch = () => {
    const Container = tw.div`max-w-[64.875rem] mx-auto pt-[6.95rem] mb-[7.9rem] 2lg:w-full 2lg:max-w-full 2lg:px-[7%] lg:w-full lg:max-w-full lg:px-[2%]`
    const Introduction = tw.div`text-center md:ml-0 sm:ml-0`;
    const Span = tw(TwSpan)``;
    const Title = tw(TwTitle_MD)`mb-[1.5rem] mt-[0.6rem] tracking-[0.01rem]`;
    const Description = tw(GrayP)`font-normal tracking-[0.1039rem] mb-[2.3rem] md:max-w-[90%] md:mx-auto sm:max-w-[90%] `

    const ListApproach = tw.div`flex items-center justify-between mt-[5.95rem] md:flex-col sm:flex-col`
    const Approach = tw.div`text-center w-full`
    const Address = tw(Approach)`max-w-[16.875rem] mt-[0.7rem]  2lg:max-w-[25%] md:max-w-full sm:max-w-full`
    const Mail = tw(Address)``
    const Phone = tw(Approach)`max-w-[26.5rem] h-[25.125rem] pt-[4.938rem] shadow-contact rounded-[2.625rem] 2lg:max-w-[40%] md:shadow-none md:mb-4 md:max-w-full sm:shadow-none sm:mb-4 sm:max-w-full`

    const ApproachImgWrapper = tw.div`mb-[2.8rem]`
    const ApproachImg = tw.img`mx-auto`
    const ApproachSpan = tw(TwSpan)``
    const ApproachTitle = tw(TwTitle_MD)`text-2xl leading-[1.875rem] mx-auto my-[0.8rem] tracking-[0.014rem] lg:text-lg`
    const ApproachTitlePhone = tw(ApproachTitle)`tracking-[0.006rem]`
    const ApproachDescription = tw(GrayP)`max-w-[16.875rem] mx-auto text-center text-sm leading-[1.313rem] font-normal tracking-[0.091rem] lg:text-xs md:max-w-[70%] sm:max-w-[70%]`
    return (
        <>
            <Container>
                <Introduction>
                    <Span>Get in Touch</Span>
                    <Title>Get direct handling by us</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</Description>
                </Introduction>
                <ListApproach>
                    <Address>
                        <ApproachImgWrapper>
                            <ApproachImg src={LocationImg} alt="" />
                        </ApproachImgWrapper>
                        <ApproachSpan>Address</ApproachSpan>
                        <ApproachTitle>101 Baker Street, NY</ApproachTitle>
                        <ApproachDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</ApproachDescription>
                    </Address>
                    <Phone>
                        <ApproachImgWrapper>
                            <ApproachImg src={PhoneImg} alt="" />
                        </ApproachImgWrapper>
                        <ApproachSpan>Phone</ApproachSpan>
                        <ApproachTitlePhone>+896 120 5889</ApproachTitlePhone>
                        <ApproachDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</ApproachDescription>
                    </Phone>
                    <Mail>
                        <ApproachImgWrapper>
                            <ApproachImg src={EmailImg} alt="" />
                        </ApproachImgWrapper>
                        <ApproachSpan>Mail</ApproachSpan>
                        <ApproachTitle>mail@company.com</ApproachTitle>
                        <ApproachDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</ApproachDescription>
                    </Mail>
                </ListApproach>
            </Container>
        </>
    )
}

export default GetInTouch
