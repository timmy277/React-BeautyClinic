import tw from "twin.macro";
import { GrayP, TwSpan, TwTitle_MD } from "../../../components/Material";
import TestimonialAvatar from '../image/others/unsplash_Z5g_6TLS6Ho.png'
import Star from '../image/others/Star.png'
import ArrowLeft from '../image/others/arrow-left.png'
import ArrowRight from '../image/others/arrow-right.png'
import TestimonialBG1 from '../image/background/Group1.png'
import TestimonialBG2 from '../image/background/Group2.png'


const Testimonial = () => {
    const TestimonialContainer = tw.div`max-w-[71.25rem] mx-auto pt-[7.27rem]`
    const AssistanceIntroduction = tw.div`text-center md:ml-0 sm:ml-0`;
    const AssistanceSpan = tw(TwSpan)`mb-[0.8rem] `;
    const AssistanceTitle = tw(TwTitle_MD)`mb-[1.5rem] mt-[0.66rem] tracking-[0.015rem]`;
    const AssistanceDescription = tw(GrayP)`font-normal tracking-[0.1039rem] mb-[2.3rem] md:max-w-[90%] md:mx-auto sm:mx-auto sm:max-w-[90%] `

    const Desc = tw(GrayP)`max-w-[48%] text-center mx-auto text-sm font-normal leading-[1.313rem] tracking-[0.09rem] mb-[2.1rem] md:max-w-[60%] sm:max-w-[55%]`
    const StarImgWrapper = tw.div``
    const StarImg = tw.img`mx-auto mb-[5.4rem]`

    return (
        <>
            <div  tw='relative max-w-full'>
                <div tw="absolute top-[0.188rem] left-0 -z-10 2xl:w-[50%]  xl:w-[50%]">
                    <img src={TestimonialBG1} alt="" tw='2xl:w-[50%] xl:w-[50%]'/>
                </div>
                <div tw="absolute bottom-[-7.5rem] right-0 -z-10 2xl:w-[50%] 2xl:bottom-[-12rem] xl:w-[60%]">
                    <img src={TestimonialBG2} alt="" tw='2xl:w-[50%] xl:w-[60%] ml-auto' />
                </div>  
                <TestimonialContainer> 
                    <AssistanceIntroduction>
                        <AssistanceSpan>Our Testimonials</AssistanceSpan>
                        <AssistanceTitle>What our customer says</AssistanceTitle>
                        <AssistanceDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</AssistanceDescription>
                    </AssistanceIntroduction>
                    <div tw='relative'>
                        <div tw='mt-[4rem] mb-[2.8rem]'>
                            <img src={TestimonialAvatar} alt="" tw='mx-auto' />
                        </div>
                        <div tw='absolute left-[11.4rem] bottom-[7.7rem] cursor-pointer md:left-[15%] sm:left-[10%] sm:bottom-[40%]'>
                            <img src={ArrowLeft} alt="" />
                        </div>
                        <div tw='absolute right-[11.4rem] bottom-[7.6rem] cursor-pointer md:right-[15%] sm:right-[10%] sm:bottom-[40%]'>
                            <img src={ArrowRight} alt="" />
                        </div>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies   condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.</Desc>
                        <StarImgWrapper>
                            <StarImg src={Star} alt="" />
                        </StarImgWrapper>
                    </div>  
                </TestimonialContainer>
            </div>
        </>
    )
}

export default Testimonial