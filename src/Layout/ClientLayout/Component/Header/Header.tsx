import "twin.macro";
import tw from "twin.macro";
import { TwButton } from "../../../../components/Material/Material";
import MainLogo from "../../../../assets/website/MainLogo.png";
import {FaTimes, FaHome, FaAddressBook, FaAddressCard, FaBlogger} from "react-icons/fa";
import { IoIosListBox, IoIosContacts } from "react-icons/io";
import { RiGalleryFill } from "react-icons/ri";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const location = useLocation();

  const NavItem = styled.li<{active: boolean, feature: boolean}>(({active, feature}) =>[
    tw`font-poppins font-medium text-base text-light_gray not-italic tracking-widest 2lg:ml-[7%] lg:ml-[7%]`,
    active && tw`font-semibold text-light_blue`,
    feature && tw`text-light_white`
  ])
  
  const HeaderContainer = tw.div`max-w-[71.25rem] justify-center items-center pt-[2.563rem] mx-auto 2lg:max-w-full lg:max-w-full  2lg:px-[9%] lg:px-[7%]  md:px-[5%]`;
  // const NavBar = tw.div`flex justify-center items-center max-h-[3.738rem] [justify-content: space-between] md:hidden sm:hidden `;
  const LogoContainer = tw.div`object-cover my-auto mx-0`;
  const LogoImg = tw.img`m-auto ml-[-0.275rem] max-w-none`;
  const ListNavItem = tw.ul`flex justify-center items-center max-w-[30.063rem] relative`;
  const HomeItem = tw(NavItem)`2lg:ml-[7%] lg:ml-[7%] ml-[8.8rem] relative after:absolute after:content-[""] after:w-20 after:h-6 after:right-0 after:top-5`;
  const NavAbout = tw(NavItem)`ml-[2.675rem] 2lg:ml-[10%] lg:ml-[10%]`;
  const NavService = tw(NavItem)`ml-[2.775rem] 2lg:ml-[10%] lg:ml-[10%]`;
  const NavGallery = tw(NavItem)`ml-[2.8rem] 2lg:ml-[10%] lg:ml-[10%]`;
  const NavBlog = tw(NavItem)`ml-[2.8rem] 2lg:ml-[10%] lg:ml-[10%]`;

  const ContactButton = styled(TwButton)<{active: boolean}>(({active}) =>[
    tw`font-medium 2lg:ml-[2%] lg:ml-[2%]`, active && tw`font-semibold text-light_blue` 
  ])
  
  const NavSpan = tw.span`mr-1`;

  // const NavLi = styled.li<{active: boolean}>(({active}) =>[
  //   tw`w-[80%] mx-auto px-3 hover:scale-125`, active && tw`text-white scale-125 bg-light_blue` 
  // ])
  const NavLi = tw.li`w-[80%] mx-auto px-3 hover:scale-125`;
  
  const NavA = styled.div<{ hover: boolean, active: boolean }>(({ hover, active }) => [
    tw`flex items-center text-[0.6rem] text-light_pink font-semibold py-2.5 pl-3 uppercase rounded-[0.5rem] font-poppins md:text-base`,
    hover && tw`hover:text-white hover:bg-light_pink `,
    active && tw`text-white scale-105 bg-light_pink`,
  ]);

  // const NavBar = tw.div`flex justify-center items-center max-h-[3.738rem] [justify-content: space-between] md:hidden sm:hidden `;

  
  const NavBar = styled.div<{feature: boolean}>(({feature}) =>[
    tw`flex justify-center items-center max-h-[3.738rem] [justify-content: space-between] md:hidden sm:hidden`,
    feature && tw`pl-[0.2rem]`
  ])
  const DropDownMenu = tw.ul`absolute mt-2 w-32 top-[1.5rem] left-[3.2rem] 2lg:left-[-4.8rem] lg:left-[-4.8rem] bg-light_white z-50 rounded-xl`
  // const DropDownMenuItem = tw(NavItem)` pb-2 pl-4 pt-2 text-light_pink pr-4 hover:bg-light_pink hover:text-light_white`
  const DropDownMenuItem = styled.li<{active: boolean}>(({active}) =>[
    tw`pt-2 pb-2 pl-4 pr-4 text-light_pink hover:bg-light_pink hover:text-light_white`,
    active && tw`bg-light_pink text-light_white`
  ])
  
  const General = tw(DropDownMenuItem)`rounded-t-xl`
  const Team = tw(DropDownMenuItem)`rounded-b-xl`
  
  const NavDropDown = tw.ul`ml-[3.2rem] pr-6`
  const NavGeneral = tw(General)` rounded-[0.5rem] text-base py-2.5 pl-3 uppercase font-poppins pb-0`
  const NavFeature = tw(General)`rounded-[0.5rem] text-base font-semibold py-2.5 pl-3 uppercase font-poppins pb-0`
  const NavTeam = tw(Team)`rounded-[0.5rem] text-base font-semibold py-2.5 pl-3 uppercase font-poppins pb-0`

  
  const [isOpen, setIsOpen] = useState(false);
  const [openNavDropDown, setOpenNavDropDown] = useState(false);

  const openDropDownMenu = () => {
    setOpenNavDropDown(!openNavDropDown);
  };

  const showDropdown = () => {
    setIsOpen(true);
  };

  const hideDropdown = () => {
    setTimeout(() => { 
      setIsOpen(false);
    }, 0);
  };

  const logo = location.pathname === "/Feature" ? "src/pages/Feature/image/others/FeatureLogo.png" : "src/assets/website/MainLogo.png";
  console.log(logo);
  // const [src, setSrc] = useState({MainLogo});
  // const changeLogo = () => {
  //   setSrc('{FeatureLogo}');
  // };
  
  return (
    <header>
      <HeaderContainer>
        <button onClick={openMenu} tw="cursor-pointer  absolute w-14  hidden top-8 left-8 md:block sm:block z-40 scale-[2]">
          <IoIosListBox />
        </button>
        <NavBar feature = {location.pathname === "/Feature"}>
          <LogoContainer>
            <Link to="/">
              <LogoImg src={logo} alt="mainLogo" />
            </Link>
          </LogoContainer>
          <ListNavItem >
            <HomeItem active = {location.pathname === "/"} feature = {location.pathname === "/Feature"} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <Link to="/">Home+</Link>
            </HomeItem>
              {isOpen &&(<DropDownMenu>
                <General active = {location.pathname === "/"} feature = {location.pathname === "/"}>
                  <Link to="/">General</Link>
                </General>
                <DropDownMenuItem active = {location.pathname === "/Feature"} feature = {location.pathname === "/Feature"}>
                  <Link to="/Feature">Feature</Link>
                </DropDownMenuItem>
                <Team active = {location.pathname === "/Team"} feature = {location.pathname === "/Team"}>
                  <Link to="/Team">Team</Link>
                </Team>
              </DropDownMenu>)
              }
            <NavAbout active = {location.pathname === "/About"} feature = {location.pathname === "/Feature"}>
              <Link to="/About">About</Link>
            </NavAbout>
            <NavService active = {location.pathname === "/Service"} feature = {location.pathname === "/Feature"}>
              <Link to="/Service">Service</Link>
            </NavService>
            <NavGallery active = {location.pathname === "/Gallery"} feature = {location.pathname === "/Feature"}>
              <Link to="/Gallery">Gallery</Link>
            </NavGallery>
            <NavBlog active = {location.pathname === "/Blog"} feature = {location.pathname === "/Feature"}>
              <Link to="/Blog">Blog</Link>
            </NavBlog>
          </ListNavItem >
          <ContactButton active = {location.pathname === "/Contact"}>
            <Link to="/Contact">Contact</Link>
          </ContactButton>
        </NavBar>
      </HeaderContainer>
      <nav>
        <div tw="fixed top-0 right-0 bottom-0 left-0 hidden z-10 bg-transparent md:block sm:block" onClick={closeMenu}></div>
        <div tw="h-full fixed top-0 left-0 bg-white w-[16rem] transition-all ease-in-out duration-500 translate-x-[-100%] z-50 transform md:w-[25rem] " id="menu">
          <div>
            <Link to="/">
              <img src={MainLogo} alt="" tw="w-[40%] mt-8 ml-8" />
            </Link>
          </div>
          <div tw="w-8 absolute top-1 right-[-0.5rem]" onClick={closeMenu}>
            <FaTimes />
          </div>
          <ul tw="mt-4 [list-style-type: none] ">
            <NavLi onClick={openDropDownMenu}>
              <Link to="/">
                <NavA hover active = {location.pathname === "/"}>
                  <NavSpan>
                    <FaHome />
                  </NavSpan>
                  Home
                </NavA>
              </Link>
            </NavLi>
            {openNavDropDown &&(<NavDropDown>
                <NavGeneral active = {location.pathname === "/"} feature = {location.pathname === "/"}>
                  <Link to="/" tw="flex items-center flex-row">
                  <NavSpan>
                    <FaHome />
                  </NavSpan>General</Link>
                </NavGeneral>
                <NavFeature active = {location.pathname === "/Feature"} feature = {location.pathname === "/Feature"}>
                  <Link to="/Feature" tw="flex items-center flex-row">
                  <NavSpan>
                    <RiGalleryFill />
                  </NavSpan>Feature</Link>
                </NavFeature>
                <NavTeam active = {location.pathname === "/Team"} feature = {location.pathname === "/Team"}>
                  <Link to="/Team" tw="flex items-center flex-row">
                  <NavSpan>
                    <IoIosContacts />
                  </NavSpan>
                  Team</Link>
                </NavTeam>
              </NavDropDown>)
              }
            <NavLi >
              <Link to="/About">
                <NavA hover active = {location.pathname === "/About"}>
                  <NavSpan>
                    <FaAddressCard />
                  </NavSpan>
                  About
                </NavA>
              </Link>
              </NavLi>
            <NavLi>
              <Link to="/Service">
                <NavA hover active = {location.pathname === "/Service"}>
                  <NavSpan>
                    <FaAddressBook />
                  </NavSpan>
                  Service
                </NavA>
              </Link>
            </NavLi>
            <NavLi>
              <Link to="/Gallery">
                <NavA hover active = {location.pathname === "/Gallery"}>
                  <NavSpan>
                    <RiGalleryFill />
                  </NavSpan>
                  Gallery
                </NavA>
              </Link>
            </NavLi>
            <NavLi >
              <Link to="/Blog" >
                <NavA hover active = {location.pathname === "/Blog"}>
                  <NavSpan>
                    <FaBlogger />
                  </NavSpan>
                  Blog
                </NavA>
              </Link>
            </NavLi>
            <NavLi>
              <Link to="/Contact">
                <NavA hover active = {location.pathname === "/Contact"}>
                  <NavSpan>
                    <IoIosContacts />
                  </NavSpan>
                  Contact
                </NavA>
              </Link>
            </NavLi>
          </ul>
        </div>
      </nav>
    </header>
  );
};

function openMenu() {
  const Menu = document.getElementById("menu")!;
  Menu.style.transform = "translateX(0)";
}

function closeMenu() {
  const Menu = document.getElementById("menu")!;
  Menu.style.transform = "translateX(-100%)";
}

export default Header;
