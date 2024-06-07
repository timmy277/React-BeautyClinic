import tw from "twin.macro";
import GoalBG from '../image/background/unsplash_rE6FqsyyqwM.png'
import { GrayP, TwTitle_MD } from "../../../components/Material";

const MainGoal = () => {
    const GoalBackground = tw.div`relative mt-[7.8rem] `
    const Overlay = tw.div`top-0 bottom-0 left-0 right-0 absolute z-0 bg-[#09115699] opacity-[1.6]`;

    const GoalContainer = tw.div`items-center mx-auto flex flex-col z-10 absolute inset-0 pt-[11.26rem] 2xl:pt-[15%] xl:pt-[12%]   2lg:pt-[12%] lg:pt-[12%] md:pt-[12%] sm:pt-[12%] xs:pt-1`    
    const GoalTitle = tw(TwTitle_MD)`text-white max-w-[50%] mx-auto ml-[15.8rem] mb-[0.5rem] tracking-[0.013rem] 2lg:ml-auto lg:ml-auto md:mb-[0.8rem] md:ml-auto sm:mb-[0.4rem] sm:ml-auto xs:ml-auto xs:mb-0 xs:max-w-[80%]`
    const GoalDescription = tw(GrayP)`text-sink_gray max-w-[70%] mx-auto tracking-[0.094rem] mb-[1.9rem] md:mb-[1rem] sm:mb-0  xs:max-w-[90%]`
    return (
        <>
            <GoalBackground>
                <div tw='-z-10'>
                    <img src={GoalBG} alt="" tw='w-full' />
                </div>
                <Overlay></Overlay>
                <GoalContainer>
                    <div tw='mx-auto text-center 2lg:max-w-full lg:max-w-full lg:px-[10%]'>
                        <GoalTitle>Customer satisfaction is our main goal</GoalTitle>
                        <GoalDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</GoalDescription>
                    </div>
                </GoalContainer>
            </GoalBackground>
        </>
    )
}

export default MainGoal
