import tw from "twin.macro"
import Assistance1 from '../image/others/unsplash_byGTytEGjBo.png'
import Assistance2 from '../image/others/unsplash_8YG31Xn4dSw.png'
import Assistance3 from '../image/others/unsplash_Fsgzm8N0hIY.png'
import { GrayP, TwSpan, TwTitle_MD } from "../../../components/Material"


const Assistance = () => {
    const AssistanceContainer = tw.div`max-w-[71.25rem] mx-auto pt-[9.5rem] 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:px-[10%] md:max-w-full sm:max-w-full` 

    const AssistanceIntroduction = tw.div`text-center md:ml-0 sm:ml-0`;
    const AssistanceSpan = tw(TwSpan)`mb-[0.8rem] `;
    const AssistanceTitle = tw(TwTitle_MD)`mb-[1.5rem] mt-[0.66rem] tracking-[0.015rem]`;
    const AssistanceDescription = tw(GrayP)`font-normal tracking-[0.1039rem] mb-[2.3rem] md:max-w-[90%] md:mx-auto sm:max-w-[90%] `

    const ListAssistance = tw.div`flex flex-col pt-[4.75rem] gap-[4.938rem] md:pt-4 sm:pt-2`
    const Assistance = tw.div`max-w-[62.75rem] flex justify-between md:flex-col-reverse md:max-w-full md:px-[15%] sm:flex-col-reverse sm:max-w-full sm:px-[15%]`

    const AssistanceImgWrapper = tw.div`md:mx-auto sm:mx-auto md:max-w-full md:w-full sm:max-w-full sm:w-full`
    const AssistanceImg = tw.img`md:w-full sm:w-full`

    const AssistanceInfor = tw.div`max-w-[27.125rem] pt-[4rem] 2lg:max-w-[40%] lg:max-w-[40%] md:mx-auto sm:mx-auto`
    const AssistanceDesc = tw(GrayP)`tracking-[0.094rem] md:text-center md:mb-4 sm:text-center sm:mb-2` 
    const AssistanceJob = tw(GrayP)`text-sm font-normal italic leading-[1.094rem] tracking-[-0.006rem] mb-[1.3rem] md:text-center sm:text-center`
    const AssistanceName = tw.span`font-poppins leading-[1.406rem] text-lg text-dark_blue font-semibold not-italic tracking-[0.006rem]`
    const AssistanceName3 = tw(AssistanceName)`mr-[0.069rem]`
    return (
        <>
            <AssistanceContainer>
                <AssistanceIntroduction>
                    <AssistanceSpan>Assistance Team</AssistanceSpan>
                    <AssistanceTitle>Meet the pro assistance</AssistanceTitle>
                    <AssistanceDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</AssistanceDescription>
                </AssistanceIntroduction>
                <ListAssistance>
                    <Assistance>
                        <AssistanceImgWrapper>
                            <AssistanceImg src={Assistance1} alt="" />
                        </AssistanceImgWrapper>
                        <AssistanceInfor>
                            <AssistanceJob><AssistanceName>Lina Gustav /</AssistanceName> Pharmacist</AssistanceJob>
                            <AssistanceDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</AssistanceDesc>
                        </AssistanceInfor>
                    </Assistance>
                    <Assistance>
                        <AssistanceImgWrapper>
                            <AssistanceImg src={Assistance2} alt="" />
                        </AssistanceImgWrapper>
                        <AssistanceInfor>
                            <AssistanceJob><AssistanceName>Adam White /</AssistanceName> Finance</AssistanceJob>
                            <AssistanceDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</AssistanceDesc>
                        </AssistanceInfor>
                    </Assistance>
                    <Assistance>
                        <AssistanceImgWrapper>
                            <AssistanceImg src={Assistance3} alt="" />
                        </AssistanceImgWrapper>
                        <AssistanceInfor>
                            <AssistanceJob><AssistanceName3>Jane Doe /</AssistanceName3>Marketer</AssistanceJob>
                            <AssistanceDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</AssistanceDesc>
                        </AssistanceInfor>
                    </Assistance>
                </ListAssistance>
            </AssistanceContainer>
        </>
    )
}

export default Assistance
