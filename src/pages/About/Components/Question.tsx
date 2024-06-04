import tw from 'twin.macro'
import ArrowUp from '../image/others/angle-up.png'
import ArrowDown from '../image/others/angle-down.png'
import LitterLine from '../image/others/LineTittle.png'
import { TwTitle_MD } from '../../../components/Material'

const Question = () => {
    const QuestionContainer = tw.div`max-w-[60.75rem] mx-auto text-center pt-[7.3rem]`
    const QuestionTitle = tw(TwTitle_MD)``
    const Question = tw.div`flex items-center justify-between`
    return (
        <>
            <QuestionContainer>
                <div tw='flex flex-col'>
                    <QuestionTitle>Services FAQ’s</QuestionTitle>
                    <div>
                        <img src={LitterLine} alt="" tw='mx-auto' />
                    </div>
                </div>
                <div>
                    <Question>
                        <p>Is beauty consultation handled thoroughly?</p>
                        <div>
                            <img src={ArrowUp} alt="" />
                        </div>
                    </Question>
                    <div tw='bg-[#F6F7FF] w-full border-t-[0.063rem] border-solid border-[#091156] rounded-b-[1.25rem] pt-[3.25rem] pr-[3.938rem] pb-[3.313rem] pl-[4.75rem]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna 
                        <br />
                        <br />
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                    </div>
                    <Question>
                        <p>Can I be beautiful in an instant time?</p>
                        <div>
                            <img src={ArrowDown} alt="" />
                        </div>
                    </Question>
                    <Question>
                        <p>Are there any side effects to the treatment methods or treatments at this clinic?</p>
                        <div>
                            <img src={ArrowDown} alt="" />
                        </div>
                    </Question>
                    <Question>
                        <p>Do professionals have accreditation in their respective fields?</p>
                        <div>
                            <img src={ArrowDown} alt="" />
                        </div>
                    </Question>
                </div>
            </QuestionContainer>
        </>
    )
}

export default Question