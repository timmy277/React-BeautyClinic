import tw from 'twin.macro'
import GalleryItem1 from '../image/banner/unsplash_FVh_yqLR9eA.png'
import GalleryItem2 from '../image/banner/unsplash_3ewkNkfJj2k.png'
import GalleryItem3 from '../image/banner/unsplash_xayCTz6N2nM.png'
import GalleryItem4 from '../image/banner/unsplash_Pe9IXUuC6QU.png'
import GalleryItem5 from '../image/banner/unsplash_fvInY-Gh7sc.png'
import GalleryItem6 from '../image/banner/unsplash_HEde-a_T4E8.png'
import GalleryItem7 from '../image/banner/unsplash_9Wa1HgE1XlA.png'
import GalleryItem8 from '../image/banner/unsplash_PqyzuzFiQfY.png'
import GalleryItem9 from '../image/banner/unsplash_4SUyx4KQ5Ik.png'
import { GrayP, TwSpan, TwTitle_MD } from '../../../components/Material'
const OurGallery = () => {
    const GalleryContainer = tw.div`max-w-[71.25rem] mx-auto pt-[7.9rem] 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:px-[10%] md:max-w-full md:px-[10%] sm:max-w-full sm:px-[10%] md:pt-8 sm:pt-8`
    const GalleryIntro = tw.div`mb-[5.45rem] md:text-center sm:text-center`
    const GallerySpan = tw(TwSpan)`md:mx-auto`
    const GalleryTitle = tw(TwTitle_MD)`max-w-[60%] tracking-[0.01rem] md:mx-auto md:max-w-[90%] sm:mx-auto sm:max-w-[90%]`
    const GalleryDescription = tw(GrayP)`max-w-[36.3%] mt-[-0.1rem] tracking-[0.094rem] md:mx-auto md:max-w-[90%] sm:mx-auto sm:max-w-[90%]`
    const GridGallery = tw.div`grid grid-cols-3 gap-y-[2.4rem] gap-x-[2.275rem] md:grid-cols-2 sm:grid-cols-1`
    const ImgWrapper = tw.div`sm:max-w-full sm:px-[20%]`
    const GalleryImg = tw.img`sm:mx-auto sm:max-w-full`
    const BottomDesc = tw(GrayP)`max-w-[60%] tracking-[0.094rem] md:max-w-full md:text-center md:mx-auto sm:max-w-full sm:text-center sm:mx-auto`
    return (
        <>
            <GalleryContainer>
                <GalleryIntro>
                    <GallerySpan>Our Gallery</GallerySpan>
                    <div tw='flex mt-[0.7rem] pr-[1.8%] justify-between md:flex-col sm:flex-col md:pr-0 sm:pr-0'>
                        <GalleryTitle>Check out the collection pictures from our clinic</GalleryTitle>
                        <GalleryDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</GalleryDescription>
                    </div>
                </GalleryIntro>
                <GridGallery>
                    <ImgWrapper>
                        <GalleryImg src={GalleryItem1} alt="" />
                    </ImgWrapper>
                    <ImgWrapper>
                        <GalleryImg src={GalleryItem2} alt="" />
                    </ImgWrapper>
                    <ImgWrapper>
                        <GalleryImg src={GalleryItem3} alt="" />
                    </ImgWrapper>
                    <ImgWrapper>
                        <GalleryImg src={GalleryItem4} alt="" />
                    </ImgWrapper>
                    <ImgWrapper>
                        <GalleryImg src={GalleryItem5} alt="" />
                    </ImgWrapper>
                    <ImgWrapper>
                        <GalleryImg src={GalleryItem6} alt="" />
                    </ImgWrapper>
                    <ImgWrapper>
                        <GalleryImg src={GalleryItem7} alt="" />
                    </ImgWrapper>
                    <ImgWrapper>
                        <GalleryImg src={GalleryItem8} alt="" />
                    </ImgWrapper>
                    <ImgWrapper>
                        <GalleryImg src={GalleryItem9} alt="" />
                    </ImgWrapper>
                </GridGallery>
                <div tw='mt-[4.2rem]'>
                    <BottomDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <span tw='font-semibold text-light_blue tracking-[0.106rem]'>our teams</span>.</BottomDesc>
                </div>
            </GalleryContainer>
        </>
    )
}

export default OurGallery
