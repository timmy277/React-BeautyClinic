import 'twin.macro'
import tw from 'twin.macro'
import { TwTitle_MD, TwSpan, GrayP } from '../../../../components/Material/Material'
import New1 from "../../image/others/unsplash_3ewkNkfJj2k.png"
import New2 from "../../image/others/unsplash_7tDGb3HrITg.png"
import New3 from "../../image/others/unsplash_0_McYfdyEDA.png"
import News from './News/News'

const NewsData = [
    {
        id: 1,
        img: New1,
        title: "How much does a consultation cost at our clinic?",
        description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
    },
    {
        id: 2,
        img: New2,
        title: "Watch out! don't choose the wrong beauty product",
        description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
    },
    {
        id: 3,
        img: New3,
        title: "About skin care you need to know",
        description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
    },
];

const FeatureBlog = () => {
    const BlogContainer = tw.div`max-w-[71.25rem] mx-auto flex flex-col 2lg:max-w-full 2lg:px-[10%] lg:max-w-full lg:px-[10%] md:px-[6%] sm:px-[6%]`
    const BLogIntroduction = tw.div`text-center mx-auto mb-[5.6rem]`
    const BlogSpan = tw(TwSpan)`tracking-[0rem]`
    const BlogTitle = tw(TwTitle_MD)`max-w-full mx-auto mt-[0.625rem] xs:max-w-[80%]`
    const BLogDescription = tw(GrayP)`mt-[1rem] font-normal tracking-widest mx-auto md:max-w-[80%] sm:max-w-[75%]`

    const BlogListWrapper = tw.div`flex flex-row gap-[3.063rem] justify-between md:flex-col md:mx-auto md:w-[90%] sm:flex-col sm:mx-auto sm:w-[85%]`

    return (
        <>
            <BlogContainer>
                <BLogIntroduction>
                    <BlogSpan>The Blog</BlogSpan>
                    <BlogTitle>Our latest news</BlogTitle>
                    <BLogDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BLogDescription>
                </BLogIntroduction>
                <BlogListWrapper>{
                    NewsData.map((news) =>(
                        <News img={news.img} title={news.title} description={news.description}/>
                    ))
                }
                </BlogListWrapper>
            </BlogContainer>
        </>
    )
}

export default FeatureBlog
