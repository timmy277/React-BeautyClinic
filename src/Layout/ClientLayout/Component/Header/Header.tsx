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
  const NavLi = styled.li<{active: boolean}>(({active}) =>[
    tw`w-[80%] mx-auto px-3 hover:scale-125`, active && tw`text-white scale-125 bg-light_blue` 
  ])

  const NavItem = styled.li<{active: boolean}>(({active}) =>[
    tw`font-poppins font-medium text-base text-light_gray not-italic tracking-widest 2lg:ml-[7%] lg:ml-[7%]`, active && tw`font-semibold text-light_blue` 
  ])

  
  
  const HeaderContainer = tw.div`max-w-[71.25rem] justify-center items-center pt-[2.563rem] mx-auto 2lg:max-w-full lg:max-w-full  2lg:px-[9%] lg:px-[7%]  md:px-[5%]`;
  const NavBar = tw.div`flex justify-center items-center max-h-[3.738rem] [justify-content: space-between] md:hidden sm:hidden `;
  const LogoContainer = tw.div`object-cover my-auto mx-0`;
  const LogoImg = tw.img`m-auto ml-[-0.275rem] max-w-none`;
  const ListNavItem = tw.ul`flex justify-center items-center max-w-[30.063rem] relative`;
  const HomeItem = tw(NavItem)`2lg:ml-[7%] lg:ml-[7%] ml-[8.8rem] `;
  const NavAbout = tw(NavItem)`ml-[2.675rem] 2lg:ml-[10%] lg:ml-[10%]`;
  const NavService = tw(NavItem)`ml-[2.775rem] 2lg:ml-[10%] lg:ml-[10%]`;
  const NavGallery = tw(NavItem)`ml-[2.8rem] 2lg:ml-[10%] lg:ml-[10%]`;
  const NavBlog = tw(NavItem)`ml-[2.8rem] 2lg:ml-[10%] lg:ml-[10%]`;

  const ContactButton = styled(TwButton)<{active: boolean}>(({active}) =>[
    tw`font-medium 2lg:ml-[2%] lg:ml-[2%]`, active && tw`font-semibold text-light_blue` 
  ])
  
  const NavSpan = tw.span`mr-1`;

  const NavA = styled.div<{ hover: boolean }>(({ hover }) => [
    tw`flex items-center text-[0.6rem] text-light_pink font-semibold py-2.5 pl-3 uppercase rounded-[0.5rem] font-poppins md:text-base`,
    hover && tw`hover:text-white hover:bg-light_pink `,
  ]);

  const DropDownMenu = tw.ul`absolute top-[1.5rem] left-[4.375rem] z-50`
  const DropDownMenuItem = tw(NavItem)`mb-1`
  const [isOpen, setIsOpen] = useState(false);

  const showDropdown = () => {
    setIsOpen(true);
  };

  const hideDropdown = () => {
    setTimeout(() => { 
      setIsOpen(false);
    }, 1000);
  };
  return (
    <header>
      <HeaderContainer>
        <button onClick={openMenu} tw="cursor-pointer  absolute w-14  hidden top-8 left-8 md:block sm:block z-40 scale-[2]">
          <IoIosListBox />
        </button>
        <NavBar>
          <LogoContainer>
            <Link to="/">
              <LogoImg src={MainLogo} alt="mainLogo" />
            </Link>
          </LogoContainer>
          <ListNavItem>
            <HomeItem active = {location.pathname === "/"} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <Link to="/">Home+</Link>
            </HomeItem>
              {isOpen &&(<DropDownMenu>
                <DropDownMenuItem active = {location.pathname === "/"}>
                  <Link to="/">General</Link>
                </DropDownMenuItem>
                <DropDownMenuItem active = {location.pathname === "/Feature"}>
                  <Link to="/Feature">Feature</Link>
                </DropDownMenuItem>
                <DropDownMenuItem active = {location.pathname === "/Team"}>
                  <Link to="/Team">Team</Link>
                </DropDownMenuItem>
              </DropDownMenu>)
              }
            <NavAbout active = {location.pathname === "/About"}>
              <Link to="/Feature">About</Link>
            </NavAbout>
            <NavService active = {location.pathname === "/Service"}>
              <Link to="/Service">Service</Link>
            </NavService>
            <NavGallery active = {location.pathname === "/Gallery"}>
              <Link to="/Gallery">Gallery</Link>
            </NavGallery>
            <NavBlog active = {location.pathname === "/Blog"}>
              <Link to="/Blog">Blog</Link>
            </NavBlog>
          </ListNavItem>
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
            <NavLi active = {location.pathname === "/"}>
              <Link to="/">
                <NavA hover>
                  <NavSpan>
                    <FaHome />
                  </NavSpan>
                  Home
                </NavA>
              </Link>
            </NavLi>
            <NavLi active = {location.pathname === "/About"}>
              <Link to="/About">
                <NavA hover>
                  <NavSpan>
                    <FaAddressCard />
                  </NavSpan>
                  About
                </NavA>
              </Link>
              </NavLi>
            <NavLi active = {location.pathname === "/Service"}>
              <Link to="/Service">
                <NavA hover>
                  <NavSpan>
                    <FaAddressBook />
                  </NavSpan>
                  Service
                </NavA>
              </Link>
            </NavLi>
            <NavLi active = {location.pathname === "/Gallery"}>
              <Link to="/Gallery">
                <NavA hover>
                  <NavSpan>
                    <RiGalleryFill />
                  </NavSpan>
                  Gallery
                </NavA>
              </Link>
            </NavLi>
            <NavLi active = {location.pathname === "/Blog"}>
              <Link to="/Blog" >
                <NavA hover>
                  <NavSpan>
                    <FaBlogger />
                  </NavSpan>
                  Blog
                </NavA>
              </Link>
            </NavLi>
            <NavLi active = {location.pathname === "/Contact"}>
              <Link to="/Contact">
                <NavA hover>
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
