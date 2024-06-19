import tw from "twin.macro"
import { GrayP, TwButton, TwTitle_LG } from "../../components/Material"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
interface IFormRegister {
    username: string;
    email: string;
    password: string;
    cfPassword: string;
}
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showCfPassword, setShowCfPassword] = useState(false);

    const checkEmailAvailability = async (email: string) => {
        const response = await fetch(`http://localhost:3000/users?email=${email}`);
        const data = await response.json();
        return data.length === 0;
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .required('Username is required'),
        email: Yup.string()
            .required('Email is required')
            .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
            'Invalid email format')
            .test('email', 'Email already exists', async (value) => {
                const isAvailable = await checkEmailAvailability(value);
                return isAvailable;
            }
            ),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, 
            'Password must contain number, uppercase letter and special character'),
        cfPassword: Yup.string()
            .required('Confirm Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, 
            'Password must contain number, uppercase letter and special character')
            .oneOf([Yup.ref('password')], 'Passwords do not match')
            
    });

    const auth = getAuth();
    const navigate = useNavigate();
    const RegisterTitle = tw(TwTitle_LG)`text-center text-light_pink mb-[4rem]`
    const Icon = tw.div`absolute right-[3.6rem] top-[3.6rem] transform -translate-y-1/2 cursor-pointer`;
    const RegisterP = tw(GrayP)`text-center mb-4 mt-8`
    const RegisterSpan = tw.span`text-dark_blue`
    const RegisterButton = tw(TwButton)`block mx-auto w-full mb-8 h-[4rem]`
    const ErrorP = tw(GrayP)`text-red-500 ml-[1.5rem] mb-4`

    const form = useForm<IFormRegister>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            username:"",
            email: "",
            password:"",
            cfPassword:"",
        },
        mode:'onChange'
    });
    const {register, formState, handleSubmit } = form;
    const { errors } = formState;


    const handleSignUp = async (data: IFormRegister) => {
            try {
                const { username, email, password } = data;
                const regobj = {username, email, password};
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                await updateProfile(user, { displayName: username });
                toast.success('Registered successfully!');
                await fetch(" http://localhost:3000/users", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(regobj),
                    }).then(function (data) {
                        console.log(data);
                        return data.json();
                    })
                    .catch((error) => {
                        toast.error('Registration failed: '+ error.message);
                    }
                );
                navigate('/Login', { state: { email, password } });
            } catch (error) {
                console.error(error);
                toast.error('Registration failed');
            }
    };

    return (
        <div tw='w-full max-w-full 2lg:px-[20%] lg:px-[20%] md:px-[10%] sm:px-[10%]'>  
            <div tw='max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[3%] pt-[5%] pb-[5%] rounded-[3rem] md:mt-[5%] sm:mt-[5%]'>
                <form onSubmit= {handleSubmit(handleSignUp)} noValidate >
                    <RegisterTitle>Register</RegisterTitle>
                    <label tw='mb-[-2rem] ml-[1.5rem] text-light_pink'>Username</label>
                    <input tw='border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full   w-full items-center' 
                    {...register("username")} type="text"
                    name="username" id="username" placeholder="Please enter your name" />
                    <ErrorP>{errors.username?.message}</ErrorP>
                    <div tw='mt-8'>
                        <label tw='mb-[-2rem] ml-[1.5rem] text-light_pink' htmlFor="email">Email</label>
                        <input tw='border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full   w-full items-center'
                        autoComplete="email" {...register("email")} type="email" 
                        name="email" id="" placeholder="Please enter your email" />
                        <ErrorP>{errors.email?.message}</ErrorP>
                    </div>
                    <div tw='relative mt-8'>
                        <label tw='ml-[1.5rem] text-light_pink' htmlFor="password" >Password</label>
                        <input tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem]   pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm    sm:text-xs max-w-full items-center' 
                        {...register("password")} name="password"
                        id="password" type={showPassword ? "text" : "password"} placeholder="Please enter your password" 
                        />
                        <ErrorP>{errors.password?.message}</ErrorP>
                        <Icon onClick={() => setShowPassword((prev) => !prev) }>
                            {showPassword ? <FaEye tw='w-8 h-8' /> : <FaEyeSlash tw='w-8 h-8' />}
                        </Icon>
                    </div>
                    <div tw='relative mt-8'>
                        <label tw='ml-[1.5rem] text-light_pink' htmlFor="confirmPass">ConfirmPassword</label>
                        <input tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full items-center'
                        {...register("cfPassword")}
                        id="cfPassword " type={showCfPassword ? "text" : "password"} placeholder="Please confirm your password" 
                        name="cfPassword" 
                        />
                        <ErrorP>{errors.cfPassword?.message}</ErrorP>
                        <Icon onClick={() => setShowCfPassword((prev) => !prev) }>
                            {showCfPassword ? <FaEye tw='w-8 h-8' /> : <FaEyeSlash tw='w-8 h-8' />}
                        </Icon>
                    </div>
                    <RegisterP>Already have an account?
                        <RegisterSpan>
                            <Link to="/Login"> Login</Link>
                        </RegisterSpan>
                    </RegisterP>
                    <div tw= 'w-full'>
                        <RegisterButton type="submit">Register</RegisterButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
