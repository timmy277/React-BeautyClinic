import tw from "twin.macro"
import { GrayP, TwButton, TwTitle_LG } from "../../components/Material"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";
import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form"
const Login = () => {
    const LoginContainer = tw.div`max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[3%] pt-[5%] pb-[5%] rounded-[3rem]`
    const LoginTitle = tw(TwTitle_LG)`text-center text-light_pink mb-[4rem]`
    const LoginInput = tw.input`border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full w-full mb-[2.395rem] items-center`

    const LoginP = tw(GrayP)`text-center mb-4`
    const LoginSpan = tw.span`text-dark_blue`
    const LoginButton = tw(TwButton)`block mx-auto px-[45%] mb-8`
    const LoginGoogle = tw(LoginButton)`text-nowrap px-[36.5%]`
    const Icon = tw.div`absolute right-[3.6rem] top-[45%] transform -translate-y-1/2 cursor-pointer`;

    const PasswordIp = styled.input<{ showPassword: boolean }>(({ showPassword }) => [
        tw`w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full mb-[2.395rem] items-center`,
        showPassword && tw``,
        ]
    );

    // const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in successfully!');
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Error logging in');
        }
    };

    const signInWithGoogle = async () => {
            setAuthing(true);   
            signInWithPopup(auth, new GoogleAuthProvider()).then(response =>{
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setAuthing(false);
        });
    }

    return (
        <LoginContainer>
            <form onSubmit={handleLogin}>
                <LoginTitle>Login</LoginTitle>
                <div tw='flex flex-col gap-8 mb-4'>
                    <label tw='mb-[-2rem] ml-[1.5rem]'>Email</label>
                    <LoginInput type="email" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    name="" id="" placeholder="Please enter your email" />
                    <div tw='relative'>
                        <label tw='ml-[1.5rem]'>Password</label>
                        <PasswordIp showPassword={showPassword}
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'} name="" id="" placeholder="Please enter your password" />
                        <Icon onClick={() => setShowPassword(!showPassword) }>
                            {showPassword ? <FaEye tw='w-8 h-8' /> : <FaEyeSlash tw='w-8 h-8' />}
                        </Icon>
                        {/* {errorMessage &&(
                            <span tw='text-red-500'>{errorMessage}</span>
                        )} */}
                    </div>
                </div>
                <LoginP>You don't have an account?
                    <LoginSpan>
                        <Link to="/Register"> Register</Link>
                    </LoginSpan>
                </LoginP>
                <div tw= 'w-full'>  
                    <LoginButton type="submit">
                        {/* {isSignIn ? 'Loading...' : 'Login'} */}Login
                    </LoginButton>
                    <LoginGoogle type="submit" disabled={authing} onClick={() => signInWithGoogle()}>
                        {/* {isSignIn ? 'Loading...' : 'Login'} */}Login With Google
                    </LoginGoogle>
                </div>
            </form>
        </LoginContainer>
    )
}

export default Login
