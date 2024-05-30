
import 'twin.macro'
import tw from 'twin.macro'
import { GrayP, TwTitle_SM } from '../../../../../components/Material/Material'
import ArrowRight from '../../../../../assets/website/angle-double-right.png'

const News = (props:{img: string, title : string, description : string}) => {
    const NewWrapper = tw.div`flex flex-col border-none  max-w-[21.688rem] max-h-[33.938rem] w-full h-full bg-white pb-[4.25rem] shadow-md rounded-[1.563rem] mx-auto md:max-w-[100%] sm:max-w-[100%] `
    const NewImageWrapper = tw.div`max-w-full max-h-full w-full h-full mb-[3.4rem]`
    const NewImage = tw.img``
    const NewTitle = tw(TwTitle_SM)`max-w-[85%] mb-[0.9rem] ml-[2.438rem]`
    const NewDescription = tw(GrayP)`max-w-[75%] font-normal text-sm leading-[1.313rem] tracking-widest ml-[2.438rem]  mb-[1.7rem] md:max-w-[90%] sm:max-w-[90%] `
    return (
        <NewWrapper>
            <NewImageWrapper>
                <NewImage src={props.img} alt="" />
            </NewImageWrapper>
            <NewTitle>{props.title}</NewTitle>
            <NewDescription>{props.description}</NewDescription>
            <div tw='flex '>
                <p tw='font-semibold text-sm leading-[1.094rem] text-light_pink font-poppins ml-[2.438rem] mr-[0.6rem]'>Learn more</p>
                <img src={ArrowRight} alt="" />
            </div>
        </NewWrapper>
    )
}

export default News
