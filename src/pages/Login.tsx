import tw from "twin.macro"
import { GrayP, TwButton, TwTitle_LG } from "../components/Material"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";

const Login = () => {
    const LoginContainer = tw.div`max-w-[50rem] bg-white shadow-md mx-auto mt-[10%] px-[3%] pt-[5%] pb-[5%] rounded-[3rem]`
    const LoginTitle = tw(TwTitle_LG)`text-center text-light_pink mb-[4rem]`
    const LoginInput = tw.input`border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-lighter_gray font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full w-full mb-[2.395rem] items-center`
    // const Password = tw(LoginInput)``
    const LoginP = tw(GrayP)`text-center mb-4`
    const LoginSpan = tw.span`text-dark_blue`
    const LoginButton = tw(TwButton)`block mx-auto px-[40%]`

    const Icon = tw.div`absolute right-[2rem] bottom-[4.8rem] top-1/2 transform -translate-y-1/2 cursor-pointer`;


    const Input = styled.input<{ showPassword: boolean }>(({ showPassword }) => [
        tw`w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-lighter_gray font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full mb-[2.395rem] items-center`,
        showPassword && tw`bg-light_pink text-light_white`,
        ]
    );
    const [showPassword, setShowPassword] = useState(false);
    return (
        <LoginContainer>
            <form action="">
                <LoginTitle>Login</LoginTitle>
                <div tw='flex flex-col gap-8 mb-4'>
                    <LoginInput type="text" name="" id="" placeholder="Please enter your email" />
                    <div tw='relative'>
                        <Input showPassword={showPassword} type="text" name="" id="" placeholder="Please enter your password" />
                        {/* <FaEye tw="" />
                        <FaEyeSlash /> */}
                        <Icon onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </Icon>

                    </div>
                </div>
                <LoginP>You don't have an account?<LoginSpan> Register</LoginSpan></LoginP>
                <div tw= 'w-full'>
                    <LoginButton type="submit">Login</LoginButton>
                </div>
            </form>
        </LoginContainer>
    )
}

export default Login
