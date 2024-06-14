import tw from "twin.macro"
import BlogImg1 from '../image/banner/unsplash_3ewkNkfJj2k1.png'
import BlogImg2 from '../image/banner/unsplash_7tDGb3HrITg.png'
import BlogImg3 from '../image/banner/unsplash_0_McYfdyEDA.png'
import FolderImg from '../image/others/folder.png'
import PostImg1 from '../image/others/unsplash_xayCTz6N2nM2.png'
import PostImg2 from '../image/others/unsplash_DiJKOYIiNmQ.png'
import PostImg3 from '../image/others/unsplash_yfmjALh1S6s.png'
import { GrayP, TwButton, TwSpan, TwTitle_MD } from "../../../components/Material"
import CaretRight from '../image/others/caret-right.png'
import SearchIcon from '../image/others/search.png'
import FacebookIcon from '../image/others/Facebook.png'
import TwitterIcon from '../image/others/Twitter.png'
import InstagramIcon from '../image/others/Instagram.png'
import LinkedInIcon from '../image/others/LinkedIn.png'
import { FaSearch, FaTimes } from "react-icons/fa";
const BlogContent = () => {
    const BlogContainer = tw.div`max-w-[71.25rem] flex mx-auto justify-between pt-[6.8rem] 2lg:max-w-full 2lg:px-[11%] lg:max-w-full lg:px-[9%] md:max-w-full md:px-[12%] sm:max-w-full sm:px-[12%]`
    const BlogList = tw.div`max-w-[65%] md:max-w-full sm:max-w-full`
    const BlogItem = tw.div`w-full mb-[8.25rem]`
    const ItemContent = tw.div`pl-[4.75rem] max-w-[45.625rem] pr-[4.175rem] pt-[3.55rem] shadow-blog-item pb-[6.25rem] rounded-b-[3.125rem] md:px-[8%] sm:px-[8%]`
    const ItemContent2 = tw(ItemContent)`pt-[3.6rem]`
    const BlogSpan = tw(TwSpan)``   
    const BlogTitle = tw(TwTitle_MD)`mb-[1.3rem] tracking-[0.005rem]`
    const BlogTitle2 = tw(BlogTitle)`tracking-[0.01rem]`
    const BlogTitle3 = tw(BlogTitle)`tracking-[0.01rem] mb-[1.27rem]`
    const BlogDescription = tw(GrayP)`tracking-[0.095rem] mb-[2.25rem]`
    const BlogButton = tw(TwButton)`flex items-center h-[3.625rem] pt-[1rem] pb-[1.1rem] pl-[3.763rem] pr-[2.463rem] sm:px-[10%] xs:px-[6%] xs:py-[3%] xs:h-auto`
    const PaginationItem = tw.p`font-poppins font-semibold text-base leading-5`
    const PaginationItem1 = tw(PaginationItem)`text-white mx-auto`
    const PaginationItem2 = tw(PaginationItem)`text-[#C7C7C7] mr-[2.625rem]`
    const PaginationItem3 = tw(PaginationItem)`text-[#C7C7C7]`

    const SideContent = tw.div` max-w-[31%] translate-x-0 md:bg-white md:max-w-[25rem] md:fixed md:top-0 md:right-0 md:transition-all md:ease-in-out md:duration-500 md:translate-x-[120%] md:z-50 md:h-screen md:transform md:pt-12 md:px-[2%] md:overflow-y-scroll sm:max-w-[22rem] sm:bg-white sm:fixed sm:top-0 sm:right-0 sm:transition-all sm:ease-in-out sm:duration-500 sm:translate-x-[120%] sm:z-50 sm:h-screen sm:transform sm:pt-12 sm:px-[2%] sm:overflow-y-scroll`
    const SideInput = tw.input`shadow-blog-side w-[21.875rem] h-[4.063rem] rounded-[3.125rem] pl-[1.688rem] font-poppins text-light_gray text-base leading-6 font-normal tracking-[0.106rem] 2lg:max-w-full 2lg:w-full lg:max-w-full lg:w-full md:text-sm sm:w-[20rem] sm:text-xs`
    const PostSpan = tw(TwSpan)`text-dark_blue`
    const PostItemSpan = tw(TwSpan)`leading-[1.313rem] tracking-[0.088rem] text-sm mt-[-0.2rem]`
    const PostItemSpan3 = tw(PostItemSpan)`mt-[-0.1rem]` 
    const PostItemP = tw(GrayP)`max-w-[10.313rem] text-xs leading-[1.125rem] font-normal lg:text-[0.6rem] lg:max-w-full`
    const CategorySpan = tw(TwSpan)`text-dark_blue`
    const CategoryP = tw(GrayP)`text-sm leading-[1.313rem] font-normal mb-[0.3rem]`
    const TagSpan = tw(CategorySpan)`ml-[3.063rem] sm:ml-0`
    const TagP = tw(CategoryP)`shadow-tag rounded-[3.125rem] text-center w-[5.125rem] pb-[0.1rem] tracking-[0.088rem] lg:w-[90%]`
    const SocialSpan = tw(TagSpan)`sm:ml-8`
    const SocialImgCircle = tw.div`rounded-full w-[2.688rem]  h-[2.688rem] shadow-social-circle flex items-center` 
    const SocialImg = tw.img`w-[1.563rem] mx-auto`
    return (
        <>
            <BlogContainer>
                <div tw='absolute top-[2rem] right-[9rem] hidden md:block sm:block cursor-pointer' onClick={openSidebar}>
                    <FaSearch tw='scale-150' />
                </div>
                <div id='overlay2' tw=" cursor-pointer fixed top-0 right-0 bottom-0 left-0 hidden z-10 bg-transparent " onClick={closeSidebar}></div>
                <BlogList>
                    <BlogItem>
                        <div>
                            <img src={BlogImg1} alt="" />
                        </div>
                        <ItemContent>
                            <div tw='flex items-center mb-[1.13rem]'>
                                <div tw='mr-[1rem] '>
                                    <img src={FolderImg} alt="" />
                                </div>
                                <BlogSpan>Consultation</BlogSpan>
                            </div>
                            <BlogTitle>How much does a consultation cost at our clinic?</BlogTitle>
                            <BlogDescription>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</BlogDescription>
                            <BlogButton>Read More <img src={CaretRight} alt="" tw='ml-[0.1rem]' /></BlogButton>
                        </ItemContent>
                    </BlogItem>
                    <BlogItem>
                        <div>
                            <img src={BlogImg2} alt="" />
                        </div>
                        <ItemContent2>
                            <div tw='flex items-center mb-[1.13rem]'>
                                <div tw='mr-[1rem] '>
                                    <img src={FolderImg} alt="" />
                                </div>
                                <BlogSpan>Beauty</BlogSpan>
                            </div>
                            <BlogTitle2>Watch out! don't choose the wrong beauty product</BlogTitle2>
                            <BlogDescription>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</BlogDescription>
                            <BlogButton>Read More <img src={CaretRight} alt="" tw='ml-[0.1rem]' /></BlogButton>
                        </ItemContent2>
                    </BlogItem>
                    <BlogItem>
                        <div>
                            <img src={BlogImg3} alt="" />
                        </div>
                        <ItemContent>
                            <div tw='flex items-center mb-[1.13rem]'>
                                <div tw='mr-[1rem] '>
                                    <img src={FolderImg} alt="" />
                                </div>
                                <BlogSpan>Treatments</BlogSpan>
                            </div>
                            <BlogTitle3>About skin care you need to know</BlogTitle3>
                            <BlogDescription>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…</BlogDescription>
                            <BlogButton>Read More <img src={CaretRight} alt="" tw='ml-[0.1rem]' /></BlogButton>
                        </ItemContent>
                    </BlogItem>
                    <div tw='flex items-center justify-end mr-[6.1rem] mt-[-2.19rem] mb-[-0.8rem] md:justify-center md:mr-0 sm:justify-center sm:mr-0'>
                        <div tw='w-[2.188rem] h-[2.188rem] bg-[#172176] rounded-full flex items-center mr-[1.75rem]'>
                            <PaginationItem1>1</PaginationItem1>
                        </div>
                        <div>
                            <PaginationItem2>2</PaginationItem2>
                        </div>
                        <div>
                            <PaginationItem3>3</PaginationItem3>
                        </div>
                    </div>
                </BlogList>
                <SideContent id="sidebar">
                    <div tw="w-8 absolute top-1 left-4 hidden md:block sm:block" onClick={closeSidebar}>
                        <FaTimes />
                    </div>
                    <div tw='relative mb-[4.7rem]'>
                        <SideInput type="text" placeholder="Search here ..." />
                        <div tw='bg-[#172176] w-[4.75rem] h-[4.063rem] flex items-center absolute right-0 top-0 rounded-e-[3.125rem] '>
                            <img src={SearchIcon} alt="" tw="ml-[1.55rem]"/>
                        </div>
                    </div>
                    <div tw='shadow-blog-side rounded-[1.563rem] pt-[3.525rem] pl-[3.063rem] pr-[1.75rem] pb-[4.1rem] mb-[5.1rem] sm:pl-8'>
                        <PostSpan>Recent Posts</PostSpan>   
                        <div tw='flex justify-between mt-[1.8rem] 2lg:gap-[10%] lg:gap-[10%]'>
                            <div>
                                <img src={PostImg1} alt="" />
                            </div>
                            <div tw='flex flex-col justify-between'>
                                <PostItemSpan>01 jan 2021</PostItemSpan>
                                <PostItemP>Lorem ipsum dolor sit amet, consectetur adipiscing.</PostItemP>
                            </div>
                        </div>
                        <div tw='flex justify-between mt-[1.6rem] 2lg:gap-[10%] lg:gap-[10%]'>
                            <div>
                                <img src={PostImg2} alt="" />
                            </div>
                            <div tw='flex flex-col justify-between'>
                                <PostItemSpan>01 jan 2021</PostItemSpan>
                                <PostItemP>Lorem ipsum dolor sit amet, consectetur adipiscing.</PostItemP>
                            </div>
                        </div>
                        <div tw='flex justify-between mt-[1.6rem] 2lg:gap-[10%] lg:gap-[10%]'>
                            <div>   
                                <img src={PostImg3} alt="" />
                            </div>
                            <div tw='flex flex-col justify-between'>
                                <PostItemSpan3>01 jan 2021</PostItemSpan3>
                                <PostItemP>Lorem ipsum dolor sit amet, consectetur adipiscing.</PostItemP>
                            </div>
                        </div>
                    </div>
                    <div tw='shadow-blog-side rounded-[1.563rem] pt-[3.625rem] pl-[3.063rem] pb-[3.063rem] mb-[4.98rem] sm:pl-8'>
                        <CategorySpan>Categories</CategorySpan>
                        <div tw='mt-[1.2rem]'>
                            <CategoryP>Consultation</CategoryP>
                            <CategoryP>Beauty</CategoryP>
                            <CategoryP>Treatments</CategoryP>
                            <CategoryP>News</CategoryP>
                        </div>
                    </div>

                    
                    <div tw='shadow-blog-side rounded-[1.563rem] pt-[3.625rem] pb-[3.363rem] mb-[5.1rem] sm:pl-8'>
                        <TagSpan>Cloud Tags</TagSpan>
                        <div tw='mt-[1.4rem] max-w-[16.375rem] mx-auto grid grid-cols-3 gap-y-[1.088rem] gap-x-2 lg:px-[5%] sm:mx-0'>
                            <TagP>beauty</TagP>
                            <TagP>cute</TagP>
                            <TagP>skin</TagP>
                            <TagP>glow</TagP>
                            <TagP>style</TagP>
                            <TagP>clinic</TagP>
                            <TagP>style</TagP>
                            <TagP>great</TagP>
                            <TagP>cute</TagP>
                        </div>
                    </div>
                    <div tw='shadow-blog-side rounded-[1.563rem] pt-[3.625rem] pb-[3.9rem]'>
                        <SocialSpan>Social Connect</SocialSpan>
                        <div tw='mt-[1.7rem] ml-[2.75rem] flex gap-[1.313rem] lg:ml-[6%] sm:ml-8'>
                            <SocialImgCircle>   
                                <SocialImg src={FacebookIcon} alt="" />
                            </SocialImgCircle>
                            <SocialImgCircle>
                                <SocialImg src={TwitterIcon} alt="" />
                            </SocialImgCircle>
                            <SocialImgCircle>
                                <SocialImg src={InstagramIcon} alt="" />
                            </SocialImgCircle>
                            <SocialImgCircle>
                                <SocialImg src={LinkedInIcon} alt="" />
                            </SocialImgCircle>
                        </div>
                    </div>
                </SideContent>
            </BlogContainer>
        </>
    )
}

function openSidebar() {
    const Sidebar = document.getElementById("sidebar")!;
    const Overlay = document.getElementById("overlay2")!;
    Sidebar.style.transform = "translateX(0)";
    Overlay.style.display = "block";
    console.log(Overlay.style.display);
}

function closeSidebar() {
    const Sidebar = document.getElementById("sidebar")!;
    const Overlay = document.getElementById("overlay2")!;
    Sidebar.style.transform = "translateX(120%)";
    Overlay.style.display = "none";
}

export default BlogContent