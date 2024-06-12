import tw from "twin.macro"
import { GrayP, TwButton, TwTitle_LG } from "../../components/Material"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";
import {useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const RegisterContainer = tw.div`max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[3%] pt-[5%] pb-[5%] rounded-[3rem]`
    const RegisterTitle = tw(TwTitle_LG)`text-center text-light_pink mb-[4rem]`
    const RegisterInput = tw.input`border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-lighter_gray font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full w-full mb-[2.395rem] items-center`

    const RegisterP = tw(GrayP)`text-center mb-4`
    const RegisterSpan = tw.span`text-dark_blue`
    const RegisterButton = tw(TwButton)`block mx-auto px-[45%]`

    const Icon = tw.div`absolute right-[3.6rem] bottom-[3.6rem] top-[25%] transform -translate-y-1/2 cursor-pointer`;

    const PasswordIp = styled.input<{ showPassword: boolean }>(({ showPassword }) => [
        tw`w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-lighter_gray font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full mb-[2.395rem] items-center`,
        showPassword && tw``,
        ]
    );
    const ConfirmPassword =  styled.input<{ showConfirmPassword: boolean }>(({ showConfirmPassword }) => [
        tw`w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-lighter_gray font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full mb-[2.395rem] items-center`,
        showPassword && tw``,
        ]
    );

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPass, setShowConfirmPassword] = useState(false);
    return (
        <RegisterContainer>
            <form action="">
                <RegisterTitle>Register</RegisterTitle>
                <div tw='flex flex-col gap-8 mb-4'>
                    <RegisterInput type="text" name="" id="" placeholder="Please enter your email" />
                    <div tw='relative'>
                        <PasswordIp 
                        showPassword={showPassword}
                        type={showPassword ? 'text' : 'password'} name="" id="p" placeholder="Please enter your password" />
                        <Icon onClick={() => setShowPassword(!showPassword) }>
                            {showPassword ? <FaEye tw='w-8 h-8' /> : <FaEyeSlash tw='w-8 h-8' />}
                        </Icon>
                    </div>
                    <div tw='relative'>
                        <ConfirmPassword showConfirmPassword={showConfirmPass}
                        type={showPassword ? 'text' : 'password'} name="" id="" placeholder="Confirm your password" />
                        <Icon onClick={() => setShowConfirmPassword(!showConfirmPass) }>
                            {showConfirmPass ? <FaEye tw='w-8 h-8' /> : <FaEyeSlash tw='w-8 h-8' />}
                        </Icon>
                    </div>
                </div>
                <RegisterP>Already have an account?<RegisterSpan>
                        <Link to="/Login"> Login</Link>
                    </RegisterSpan></RegisterP>
                <div tw= 'w-full'>
                    <RegisterButton type="submit">Register</RegisterButton>
                </div>
            </form>
        </RegisterContainer>
    )
}

export default Register
