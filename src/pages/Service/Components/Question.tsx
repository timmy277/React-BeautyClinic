import tw from 'twin.macro'
import LitterLine from '../image/others/LineTittle.png'
import { GrayP, TwTitle_MD } from '../../../components/Material'
import { useState } from 'react'


const Question = () => {
    const QuestionContainer = tw.div`max-w-[60.75rem] mx-auto pt-[7.3rem] mb-[7.3rem] 2lg:max-w-full 2lg:px-[16%] lg:max-w-full lg:px-[15%] md:max-w-full md:px-[15%] sm:max-w-full sm:px-[15%]`
    const QuestionTitle = tw(TwTitle_MD)`ml-[0.7rem] mb-4 text-center tracking-[0.019rem]`
    const Question = tw.div`flex justify-between`
    const Question1 = tw(Question)`mb-[0.9rem]`
    const Question2 = tw(Question)`mb-[2rem]`
    const Question3 = tw(Question)`mb-[1.9rem]`
    const Question4 = tw(Question)`mb-[1.9rem]`
    

    const Answer1 = tw.p`font-poppins text-light_gray font-normal italic text-sm leading-[1.313rem] md:text-xs sm:text-xs max-w-[90%] tracking-[0.093rem] `
    const Answer2 = tw(Answer1)` mb-[2.2rem] tracking-[0.091rem]`
    const QuestionP =tw(GrayP)`text-dark_blue ml-[2.2rem] tracking-[0.105rem]` 
    const QuestionP2 = tw(QuestionP)`tracking-[0.102rem]`
    const QuestionP3 = tw(QuestionP)`tracking-[0.104rem]`
    const ArrowWrapper = tw.div`mr-[1.2rem] pl-4`

    const [openAnswer, setOpenAnswer] = useState([false, false, false, false]);
    const toggleAnswer = (index: number ) => {
        setOpenAnswer(openAnswer.map((open, i) => (i === index ? !open : open)));
    };

    const getArrow = (isOpen: boolean) => {
        return isOpen
            ? './angle-down.png'
            : './angle-up.png';
    };


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
                    <Question1 onClick={() => toggleAnswer(0)}>
                        <QuestionP>Is beauty consultation handled thoroughly?</QuestionP>
                        <ArrowWrapper>
                            <img src={getArrow(openAnswer[0])} alt="" tw='max-w-none' />
                        </ArrowWrapper>
                    </Question1>
                    { openAnswer[0] && (<div tw='bg-[#F6F7FF] w-full border-t-[0.063rem] border-solid border-[#091156] rounded-b-[1.25rem] pt-[3.25rem] pr-[3.938rem] pb-[1.513rem] pl-[4.75rem] mb-[1.7rem]'>
                        <Answer1>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna 
                        <br />
                        <br />
                        </Answer1>
                        <Answer2>porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</Answer2>
                    </div>)
                    }
                    <Question2 onClick={() => toggleAnswer(1)}>
                        <QuestionP2>Can I be beautiful in an instant time?</QuestionP2>
                        <ArrowWrapper>
                            <img src={getArrow(openAnswer[1])} alt="" tw='max-w-none' />
                        </ArrowWrapper>
                    </Question2>
                    {openAnswer[1] &&(<div tw='bg-[#F6F7FF] w-full border-t-[0.063rem] border-solid border-[#091156] rounded-b-[1.25rem] pt-[3.25rem] pr-[3.938rem] pb-[1.513rem] pl-[4.75rem] mb-[1.7rem] md:pl-[2rem] md:pr-[2rem]'>
                        <Answer1>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna 
                        <br />
                        <br />
                        </Answer1>
                        <Answer2>porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</Answer2>
                    </div>)}
                    <Question3 onClick={() => toggleAnswer(2)}>
                        <QuestionP3>Are there any side effects to the treatment methods or treatments at this clinic?</QuestionP3>
                        <ArrowWrapper>
                            <img src={getArrow(openAnswer[2])} alt="" tw='max-w-none' />
                        </ArrowWrapper>
                    </Question3>
                    {openAnswer[2] &&(<div tw='bg-[#F6F7FF] w-full border-t-[0.063rem] border-solid border-[#091156] rounded-b-[1.25rem] pt-[3.25rem] pr-[3.938rem] pb-[1.513rem] pl-[4.75rem] mb-[1.7rem] md:pl-[2rem] md:pr-[2rem]'>
                        <Answer1>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna 
                        <br />
                        <br />
                        </Answer1>
                        <Answer2>porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</Answer2>
                    </div>)}
                    <Question4 onClick={() => toggleAnswer(3)}>
                        <QuestionP>Do professionals have accreditation in their respective fields?</QuestionP>
                        <ArrowWrapper>
                            <img src={getArrow(openAnswer[3])} alt="" tw='max-w-none' />
                        </ArrowWrapper>
                    </Question4>
                    {openAnswer[3] &&(<div tw='bg-[#F6F7FF] w-full border-t-[0.063rem] border-solid border-[#091156] rounded-b-[1.25rem] pt-[3.25rem] pr-[3.938rem] pb-[1.513rem] pl-[4.75rem] mb-[1.7rem] md:pl-[2rem] md:pr-[2rem]'>
                        <Answer1>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna 
                        <br />
                        <br />
                        </Answer1>
                        <Answer2>porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</Answer2>
                    </div>)}
                </div>
            </QuestionContainer>
        </>
    )
}

// function openText() {
//     const Answ = document.getElementById("answer")!;
//     Menu.style.transform = "translateX(0)";
// }
    
// function closeText() {
//     const Answ = document.getElementById("menu")!;
//     Menu.style.transform = "translateX(-100%)";
// }

export default Question