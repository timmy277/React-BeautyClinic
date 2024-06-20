import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import tw, { styled } from "twin.macro";
import { GrayP, TwButton, TwTitle_LG } from "../../components/Material";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { DebounceInput } from 'react-debounce-input';
import { ClipLoader } from "react-spinners";

interface IFormLogin {
    email: string;
    password: string;
}

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    // const [authing, setAuthing] = useState(false);
    const location = useLocation();
    
    

    // const checkEmailExistence = async (email: string) => {
    //     const response = await fetch(`http://localhost:3000/users?email=${email}`);
    //     const data = await response.json();
    //     return data.length > 0;
    // };

    const validationLoginSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
            'Invalid email format')
            // .test('email', 'This email is not registered', async (value) => {
            //     const isAvailable = await checkEmailExistence(value);
            //     return isAvailable;
            // }
            // )
            ,
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, 
            'Password must contain number, uppercase or lowercase letter and special character'),
    });

    const form = useForm<IFormLogin>({
        resolver: yupResolver(validationLoginSchema),
        defaultValues: {
            email: "",
            password:"",
        },
        // mode:'onChange'
    });

    const {register, formState, handleSubmit, trigger, setValue } = form;
    const { errors } = formState;
    
    const LoginTitle = tw(TwTitle_LG)`text-center text-light_pink mb-[4rem]`
    const Icon = tw.div`absolute right-[3.6rem] top-[3.6rem] transform -translate-y-1/2 cursor-pointer`;
    const LoginP = tw(GrayP)`text-center mb-4 mt-8`
    const LoginSpan = tw.span`text-dark_blue`
    const LoadingSpinner = tw(ClipLoader)`mx-auto`;
    const LoginButton =  styled(TwButton)<{ isLoading: boolean }>(({ isLoading }) => [
        tw`block mx-auto w-full mb-8 h-[4rem] rounded-2xl`,
        isLoading && tw`cursor-not-allowed`,
    ]);

    // const LoginGoogle = tw(LoginButton)`text-nowrap w-full flex items-center justify-center gap-4 text-center`
    const ErrorP = tw(GrayP)`text-red-500 ml-[1.5rem]`

    useEffect(() => {
        if (location.state) {
            const { email, password } = location.state;
            setValue('email', email);
            setValue('password', password);
        }
    }, [location, setValue]);

    const handleLogin = async (data: IFormLogin) => {
        setIsLoading(true);
        try {
            const { email, password } = data;
            const loginobj = {email, password};
            await signInWithEmailAndPassword(auth, email, password);
            const response = await fetch(`http://localhost:3000/login`, {method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(loginobj)
            })
            console.log("Response:", response);
            const userData = await response.json();
            const { accessToken } = userData;
            console.log(accessToken);
            localStorage.setItem('accessToken', accessToken);
            toast.success('Logged in successfully!');
            navigate('/');
        }
        catch (error) {
            console.error(error);
            toast.error('Email or password is incorrect');
        }
        finally {
            setIsLoading(false);
        }
    };

    // const signInWithGoogle = async () => {
    //     setAuthing(true);   
    //     signInWithPopup(auth, new GoogleAuthProvider()).then(response =>{
    //         console.log(response.user.uid);
    //         navigate('/');
    //         toast.success('Logged in successfully!');
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         setAuthing(false);
    //         toast.error('Email or password is incorrect');
    //     });
    // }
    return (
        <div tw='w-full max-w-full 2lg:px-[20%] lg:px-[20%] md:px-[10%] sm:px-[10%]'>  
            <div tw='max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[8%] pt-[5%] pb-[5%] rounded-2xl md:mt-[5%] sm:mt-[5%]'>
                <form onSubmit={ handleSubmit(handleLogin)} noValidate>
                    <LoginTitle >Login</LoginTitle>
                    <label tw='mb-[-2rem] ml-[1.5rem] text-light_pink' htmlFor="email">Email</label>
                        <DebounceInput tw='border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full w-full items-center'
                        minLength={0} debounceTimeout={500}
                        autoComplete="email" {...register("email")} type="email"
                        onChange={(e) =>{ 
                            setValue('email', e.target.value)
                            trigger('email');
                        }}
                        id="email" placeholder="Please enter your email" />
                        <ErrorP>{errors.email?.message}</ErrorP>
                    <div tw='relative mt-8'>
                        <label tw='ml-[1.5rem] text-light_pink' htmlFor="password">Password</label>
                        <DebounceInput tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem]   pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full items-center'
                        minLength={0} debounceTimeout={500}
                        autoComplete="password" {...register("password")}
                        onChange={(e) => {
                            setValue('password', e.target.value)
                            trigger('password');
                        }}
                        id="password" type={showPassword ? "text" : "password"} placeholder="Please enter your password" />
                        <ErrorP>{errors.password?.message}</ErrorP>
                        {/* <p>Value: {watch("password")}</p> */}
                        <Icon onClick={() => setShowPassword((prev) => !prev) }>
                            {showPassword ? <FaEye tw='w-8 h-8' /> : <FaEyeSlash tw='w-8 h-8' />}
                        </Icon> 
                    </div>
                    <LoginP>You don't have an account?
                        <LoginSpan>
                            <Link to="/Register"> Register</Link>
                        </LoginSpan>
                    </LoginP>
                    <div tw= 'w-full'>  
                        <LoginButton type="submit" disabled={isLoading} isLoading={isLoading}>
                            {isLoading ?<LoadingSpinner color="white"  /> : 'Login'}
                        </LoginButton>      
                        {/* <LoginGoogle type="submit" disabled={authing} onClick={() => signInWithGoogle()}>
                            <FcGoogle tw='w-8 h-8' />  Login with Google
                        </LoginGoogle> */}
                    </div>
                </form>

            </div>
        </div>  
    )
}

export default Login
