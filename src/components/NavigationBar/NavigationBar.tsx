
import 'twin.macro'
import tw from 'twin.macro'
import {TwButton} from '../Material/Material'
// import styled from "styled-components"
import MainLogo from '../../assets/website/MainLogo.png'
import { FaTimes, FaHome, FaAddressCard, FaAddressBook, FaBlogger  } from "react-icons/fa";
import { IoIosListBox, IoIosContacts  } from "react-icons/io";
import { RiGalleryFill } from "react-icons/ri";
import styled from 'styled-components'
import { Link} from "react-router-dom";
const NavigationBar = () => {
    const HeaderContainer = tw.div`max-w-[71.25rem] justify-center items-center pt-[2.563rem] mx-auto lg:max-w-full lg:px-[5%] md:px-[5%]`
    const NavBar = tw.div`flex justify-center items-center max-h-[3.738rem] [justify-content: space-between] md:hidden sm:hidden `
    const LogoContainer = tw.div`object-cover my-auto mx-0`
    const LogoImg = tw.img`m-auto ml-[-0.275rem] max-w-none`
    const ListNavItem = tw.ul`flex justify-center items-center max-w-[30.063rem]`
    const NavItem = tw.li`font-poppins font-medium text-base text-light_gray not-italic tracking-widest lg:ml-[7%]`
    const HomeItem = tw(NavItem)`text-light_blue ml-[8.8rem] font-semibold lg:ml-[7%]`
    const NavAbout = tw(NavItem)`ml-[2.675rem] lg:ml-[10%]`
    const NavService = tw(NavItem)`ml-[2.775rem] lg:ml-[10%]`
    const NavGallery = tw(NavItem)`ml-[2.8rem] lg:ml-[10%]`
    const NavBlog = tw(NavItem)`ml-[2.8rem] lg:ml-[10%]`
    const ContactButton = tw(TwButton)`font-medium lg:ml-[2%]`
    const NavLi = tw.li`w-[80%] mx-auto px-3 hover:scale-125`
    const NavSpan = tw.span`mr-1`

    const NavA = styled.div<{hover: boolean}>(({ hover }) => [
        tw`flex items-center text-[0.6rem] text-light_pink font-semibold py-2.5 pl-3 uppercase rounded-[0.5rem] font-poppins md:text-base`,
        hover && tw`hover:text-white hover:bg-light_pink `
    ]);
    return (
        <header>
            <HeaderContainer>
                <button onClick={openMenu} tw="cursor-pointer  absolute w-14  hidden top-8 left-8 md:block sm:block z-40 scale-[2]">
                    <IoIosListBox />
                </button>
                <NavBar>
                    <LogoContainer>
                        <Link to="/Home1" >
                            <LogoImg src={MainLogo} alt="mainLogo" />
                        </Link>
                    </LogoContainer>
                    <ListNavItem>
                        <HomeItem>Home+</HomeItem>
                        <NavAbout>
                            <Link to="/Home2">About</Link>
                        </NavAbout>
                        <NavService>Service</NavService>
                        <NavGallery>Gallery</NavGallery>
                        <NavBlog>Blog</NavBlog>
                    </ListNavItem>
                    <ContactButton>Contact</ContactButton>
                </NavBar>
            </HeaderContainer>
            <nav>
                <div tw='fixed top-0 right-0 bottom-0 left-0 hidden z-10 bg-transparent md:block sm:block' 
                onClick={closeMenu}></div>
                <div tw='h-full fixed top-0 left-0 bg-white w-[16rem] transition-all ease-in-out duration-500 translate-x-[-100%] z-50 transform md:w-[25rem] ' id='menu'>
                    <div>
                        <img src={MainLogo} alt="" tw='w-[40%] mt-8 ml-8'/>
                    </div>
                    <div tw='w-8 absolute top-1 right-[-0.5rem]' onClick={closeMenu}>
                        <FaTimes />
                    </div>
                    <ul tw='mt-4 [list-style-type: none] '>
                        <NavLi>
                            <NavA hover>
                                <NavSpan><FaHome /></NavSpan>
                                Home
                            </NavA>
                        </NavLi>
                        <NavLi>
                            <NavA  hover>
                                <NavSpan><FaAddressCard /></NavSpan>
                                About
                            </NavA>
                        </NavLi>
                        <NavLi>
                            <NavA  hover>
                                <NavSpan><FaAddressBook /></NavSpan>
                                Service
                            </NavA>
                        </NavLi>
                        <NavLi>
                            <NavA  hover>
                                <NavSpan><RiGalleryFill /></NavSpan>
                                Gallery
                            </NavA>
                        </NavLi>
                        <NavLi>
                            <NavA  hover>
                                <NavSpan><FaBlogger /></NavSpan>
                                Blog
                            </NavA>
                        </NavLi>
                        <NavLi>
                            <NavA  hover>
                                <NavSpan><IoIosContacts /></NavSpan>
                                Contact
                            </NavA>
                        </NavLi>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

function openMenu() {
    const Menu = document.getElementById("menu")!;
    Menu.style.transform = 'translateX(0)';
}

function closeMenu() {
    const Menu = document.getElementById("menu")!;
    Menu.style.transform = 'translateX(-100%)';
}

export default NavigationBar