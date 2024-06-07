import tw from "twin.macro"
import BlogHomeBG from '../image/background/unsplash_QA9fRIi6sFw.png'
import { GrayP, TwTitle_MD } from "../../../components/Material";
const BlogHome = () => {
    const HomeBackground = tw.div`relative mt-[2.4rem]`
    const Overlay = tw.div`top-0 bottom-0 left-0 right-0 absolute z-0 bg-[#09115699] opacity-[1.6]`;

    const HomeContainer = tw.div`flex  items-center mx-auto z-10 absolute inset-0 `    
    const HomeTitle = tw(TwTitle_MD)`text-white max-w-[50%] mx-auto ml-[9.3rem] mb-[-0.4rem] tracking-[0.013rem] sm:ml-[15%]`
    const HomeP = tw(GrayP)`font-medium text-[#D9D9D9] mr-[9.2rem] mt-[0.2rem] sm:mr-[15%]`
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