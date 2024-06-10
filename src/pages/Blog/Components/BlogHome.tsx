import tw from "twin.macro"
import BlogHomeBG from '../image/background/unsplash_QA9fRIi6sFw.png'
import { GrayP, TwTitle_MD } from "../../../components/Material";
const BlogHome = () => {
    const HomeBackground = tw.div`relative mt-[2.4rem]`
    const Overlay = tw.div`top-0 bottom-0 left-0 right-0 absolute z-0 bg-[#09115699] opacity-[1.6]`;

    const HomeContainer = tw.div`max-w-[71.575rem] flex items-center justify-between mx-auto z-10 absolute inset-0 2lg:px-[10%] 2lg:max-w-full lg:px-[10%] lg:max-w-full md:px-[10%] md:max-w-full sm:px-[10%] sm:max-w-full`    
    const HomeTitle = tw(TwTitle_MD)`text-white max-w-[50%] ml-[0.15rem] mb-[-0.4rem] tracking-[0.013rem] sm:ml-[15%]`
    const HomeP = tw(GrayP)`font-medium text-[#D9D9D9] mt-[0.2rem] sm:mr-[15%]`
    return (
        <>
        <HomeBackground>
                <div tw='-z-10'>
                    <img src={BlogHomeBG} alt="" tw='w-full' />
                </div>
                <HomeContainer>
                    <HomeTitle>Blog</HomeTitle>
                    <HomeP>Home	• Blog</HomeP>
                </HomeContainer>
                <Overlay></Overlay>
        </HomeBackground>
        </>
    )
}

export default BlogHome