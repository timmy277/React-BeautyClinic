import tw from 'twin.macro'
import ArrowUp from '../image/others/angle-up.png'
import ArrowDown from '../image/others/angle-down.png'
import LitterLine from '../image/others/LineTittle.png'
import { GrayP, TwTitle_MD } from '../../../components/Material'


const Question = () => {
    const QuestionContainer = tw.div`max-w-[60.75rem] mx-auto pt-[7.3rem] mb-[7.3rem] 2lg:max-w-full 2lg:px-[16%] lg:max-w-full lg:px-[15%] md:max-w-full md:px-[15%] sm:max-w-full sm:px-[15%]`
    const QuestionTitle = tw(TwTitle_MD)`ml-[0.7rem] mb-4 text-center`
    const Question = tw.div`flex justify-between`
    const Question1 = tw(Question)`mb-[0.9rem]`
    const Question2 = tw(Question)`mb-[1.9rem]`
    const Question3 = tw(Question)`mb-[1.9rem]`
    

    const Answer = tw.p`font-poppins text-light_gray font-normal italic text-sm leading-[1.313rem] md:text-xs sm:text-xs max-w-[90%] tracking-[0.092rem] mb-[2.2rem]`
    const QuestionP =tw(GrayP)`text-dark_blue ml-[2.2rem] tracking-[0.106rem]` 
    const ArrowWrapper = tw.div`mr-[1.2rem] pl-4`
    return (        
        <>
            <QuestionContainer>
                <div tw='flex flex-col mb-[4.2rem]'>
                    <QuestionTitle>Services FAQ’s</QuestionTitle>
                    <div>
                        <img src={LitterLine} alt="" tw='mx-auto' />
                    </div>
                </div>
                <div>
                    <Question1>
                        <QuestionP>Is beauty consultation handled thoroughly?</QuestionP>
                        <ArrowWrapper>
                            <img src={ArrowUp} alt="" tw='max-w-none' />
                        </ArrowWrapper>
                    </Question1>
                    <div tw='bg-[#F6F7FF] w-full border-t-[0.063rem] border-solid border-[#091156] rounded-b-[1.25rem] pt-[3.25rem] pr-[3.938rem] pb-[1.513rem] pl-[4.75rem] mb-[1.8rem]'>
                        <Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna 
                        <br />
                        <br />
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</Answer>
                    </div>
                    <Question2>
                        <QuestionP>Can I be beautiful in an instant time?</QuestionP>
                        <ArrowWrapper>
                            <img src={ArrowDown} alt="" tw='max-w-none' />
                        </ArrowWrapper>
                    </Question2>
                    <Question3>
                        <QuestionP>Are there any side effects to the treatment methods or treatments at this clinic?</QuestionP>
                        <ArrowWrapper>
                            <img src={ArrowDown} alt="" tw='max-w-none' />
                        </ArrowWrapper>
                    </Question3>
                    <Question>
                        <QuestionP>Do professionals have accreditation in their respective fields?</QuestionP>
                        <ArrowWrapper>
                            <img src={ArrowDown} alt="" tw='max-w-none' />
                        </ArrowWrapper>
                    </Question>
                </div>
            </QuestionContainer>
        </>
    )
}

export default Question