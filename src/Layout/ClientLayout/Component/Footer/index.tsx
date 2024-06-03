
// import tw from 'twin.macro'
import tw from 'twin.macro'
import FooterLogo from '../../../../assets/website/FooterLogo.png'
import IconFacebook from '../../../../assets/iconSocial/facebook-f.png'
import IconTwitter from '../../../../assets/iconSocial/twitter2.png'
import IconInstagram from '../../../../assets/iconSocial/instagram2.png'
import IconYoutube from '../../../../assets/iconSocial/youtube.png'
import IconLinkedin from '../../../../assets/iconSocial/linkedin-in.png'
import ButtonBackToTop from '../../../../assets/website/ToTopButton.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    const FooterWrapper = tw.div`max-w-full h-[44.084rem] flex 
    bg-[url("./FooterBG.png"), url("./BottomBG.png")]
    bg-center-bottom bg-no-repeat mt-[4.3rem] pt-[14rem] 2xl:bg-top-bottom 2xl:bg-cover-contain xl:bg-top-bottom xl:bg-cover-contain md:pt-[10rem] sm:pt-[10rem] overflow-visible`
    const FooterContainer = tw.div`max-w-[71.25rem] w-full mx-auto flex flex-col text-dark_white font-poppins text-base leading-6 tracking-widest font-normal 2lg:px-[5%] lg:px-[5%] md:text-sm sm:text-xs bg-full `
    const FooterContent = tw.div`mx-auto w-full flex md:flex-col md:items-center sm:flex-col sm:items-center xs:text-center xs:m-0 `
    const CompanyInfo = tw.div`max-w-[30.75rem] flex flex-col w-1/2 mt-[1.1rem] md:w-full md:items-center sm:w-full sm:items-center`
    const CompanyContact = tw.div` flex w-1/2 flex-1 md:items-center md:w-[80%] sm:w-[80%]`
    const ListPage = tw.div`flex flex-col w-1/2 pt-[0.1rem] pl-[8.1rem] mb-[1.8rem] md:pl-0 md:items-center sm:pl-0 sm:items-center`
    const ListInfo = tw(ListPage)`pl-[6.85rem] md:pl-0 md:items-center sm:pl-0 sm:items-center`
    const PageSpan = tw.span`font-poppins font-medium text-lg leading-[1.688rem] tracking-widest text-white`
    const InfoSpan = tw(PageSpan)``
    const BottomFooter = tw.div`flex mt-[6.2rem] justify-between md:mt-0 md:flex-col md:items-center sm:mt-0 sm:flex-col sm:items-center `
    const SocialContact = tw.div`flex gap-[1.3rem] md:mb-6 sm:mb-4 xs:gap-[3%]`
    const SocialIcon = tw.img`mr-[1.5rem] `
    const ContactLi = tw.li`list-none list-image-vector font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs text-dark_white pl-[0.313rem] mb-[0.7rem]`
    const ButtonToTop = tw.button`fixed border-none bottom-[10.6rem] right-16 cursor-pointer`

    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterContent>
                    <CompanyInfo>
                        <div>
                            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                                <img src={FooterLogo} alt="FooterLogo" tw='md:mb-1.5 sm:mb-1.5' />
                            </Link>
                        </div>
                        <div tw="pl-[2rem] pt-[2.1rem] md:pt-0 md:pl-0 md:mb-6 sm:pl-0 sm:pt-0 sm:mb-6">
                            <p tw=" mb-[1.3rem] tracking-[0.106em] xs:w-[100%] xs:text-center"><b>Beautice</b> is a Beauty Clinic WordPress Theme.</p>
                            <p tw="italic text-sm font-medium leading-[1.313rem] tracking-[0.101em]">Baker Steet 101, NY, United States.</p>
                            <div tw="flex gap-[2.6rem] italic text-sm font-medium leading-[1.313rem] tracking-[0.101em] mt-[0.3rem] xs:flex-col xs:text-center xs:gap-0">
                                <p>+521 569 8966.</p>
                                <p tw="underline">mail@company.com.</p>
                            </div>
                        </div>
                    </CompanyInfo>
                    <CompanyContact>
                        <ListPage>
                            <PageSpan>Pages</PageSpan>
                            <ul tw="ml-[1rem] mt-[1.8rem]">
                                <ContactLi>
                                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                                </ContactLi>
                                <ContactLi>
                                    <Link to="/About" onClick={() => window.scrollTo(0, 0)}>About</Link>
                                </ContactLi>
                                <ContactLi>
                                    <Link to="/Service" onClick={() => window.scrollTo(0, 0)}>Services</Link>
                                </ContactLi>
                                <ContactLi>
                                    <Link to="/Gallery" onClick={() => window.scrollTo(0, 0)}>Gallery</Link>
                                </ContactLi>
                                <ContactLi>
                                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>Team</Link>
                                </ContactLi>
                            </ul>
                        </ListPage>
                        <ListInfo>
                            <InfoSpan>Informations</InfoSpan>
                            <ul tw="ml-[1rem] mt-[1.8rem]">
                                <ContactLi>Terms & conditions</ContactLi>
                                <ContactLi>Privacy policy</ContactLi>
                                <ContactLi>
                                    <Link to="/Blog" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
                                </ContactLi>
                                <ContactLi>
                                    <Link to="/Contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                                </ContactLi>
                            </ul>
                        </ListInfo>
                    </CompanyContact>
                </FooterContent>
                <ButtonToTop>
                    <img src={ButtonBackToTop} alt="ButtonBackToTop" id='btnBacktoTop' onClick={backToTop}/>
                </ButtonToTop>
                <BottomFooter>
                    <SocialContact>
                        <SocialIcon src={IconFacebook} alt="IconFacebook" />
                        <SocialIcon src={IconTwitter} alt="IconTwitter" />
                        <SocialIcon src={IconLinkedin} alt="IconLinkedin" />
                        <SocialIcon src={IconYoutube} alt="IconYoutube" />
                        <SocialIcon src={IconInstagram} alt="IconInstagram" />
                    </SocialContact>
                    <p tw="text-base font-normal tracking-[0.105em] sm:text-xs xs:text-center">© AltDesain Studio 2021 - All right reserved.</p>
                </BottomFooter>
            </FooterContainer>
        </FooterWrapper>
    )
}


window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
    const backToTopBtn = document.getElementById("btnBacktoTop")!;
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function backToTop() {
    document.documentElement.scrollTop = 0;
}

export default Footer