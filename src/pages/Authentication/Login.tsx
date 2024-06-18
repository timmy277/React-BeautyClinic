import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import tw from "twin.macro";
import { GrayP, TwButton, TwTitle_LG } from "../../components/Material";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form"
// import {DevTool} from '@hookform/devtools'

interface IFormLogin {
    email: string;
    password: string;
}


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const location = useLocation();

    const {register, formState: {errors} } = useForm<IFormLogin>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: "onBlur",
    });
    
    const LoginTitle = tw(TwTitle_LG)`text-center text-light_pink mb-[4rem]`
    const Icon = tw.div`absolute right-[3.6rem] top-[3.6rem] transform -translate-y-1/2 cursor-pointer`;

    const LoginP = tw(GrayP)`text-center mb-4 mt-8`
    const LoginSpan = tw.span`text-dark_blue`
    const LoginButton = tw(TwButton)`block mx-auto w-full mb-8 h-[4rem]`
    const LoginGoogle = tw(LoginButton)`text-nowrap w-full flex items-center justify-center gap-4 text-center`
    const ErrorP = tw(GrayP)`text-red-500 ml-[1.5rem]`



    useEffect(() => {
        if (location.state) {
            setEmail(location.state.email);
            setPassword(location.state.password);
        }
    }, [location]);

    
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const regobj = { email, password};
            try {
                await signInWithEmailAndPassword(auth, email, password);
                await fetch(`http://localhost:3000/login`, {method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(regobj)
                    }).then((response) => {
                        return response.json();
                    }).then((response) => {
                        localStorage.setItem('response', JSON.stringify(response));
                        console.log(response);
                    })
                toast.success('Logged in successfully!');
                navigate('/');
            } catch (error) {
                console.error(error);
                toast.error('Email or password is incorrect');
            }
    };

    const signInWithGoogle = async () => {
        setAuthing(true);   
        signInWithPopup(auth, new GoogleAuthProvider()).then(response =>{
            console.log(response.user.uid);
            navigate('/');
            toast.success('Logged in successfully!');
        })
        .catch(error => {
            console.log(error);
            setAuthing(false);
            toast.error('Email or password is incorrect');
        });
    }

    // const watchEmail = watch('email');

    return (
        <div tw='w-full max-w-full 2lg:px-[20%] lg:px-[20%] md:px-[10%] sm:px-[10%]'>  
            <div tw='max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[3%] pt-[5%] pb-[5%] rounded-[3rem] md:mt-[5%] sm:mt-[5%]'>
                <form onSubmit={ handleLogin} noValidate>
                    <LoginTitle >Login</LoginTitle>

                    <label tw='mb-[-2rem] ml-[1.5rem] text-light_pink' htmlFor="email">Email</label>
                    <input tw='border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] 
                    pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full    w-full mb-[2. 395rem] items-center'
                    autoComplete="email"
                    {...register("email",
                        {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: { 
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                                message: 'Invalid email format'
                            },
                            validate:{
                                emailAvailable: async (fieldValue) => {
                                    const response = await fetch(`http://localhost:3000/users?email=${fieldValue}`);
                                    const data = await response.json();
                                    return data.length > 0 || 'This email is not existed';
                                },
                                notAdmin: (fieldValue)=> {
                                    return (fieldValue!=='admin@gmail.com' || 'Enter a different email address');
                                }, 
                                notBlackListed: (fieldValue)=> {
                                    return (!fieldValue.endsWith('@hack.com') || 'This domain is not allowed');
                                },
                            }
                        }
                    )}
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    id="email" placeholder="Please enter your email" />
                    <ErrorP>{errors.email?.message}</ErrorP>

                    <div tw='relative mt-8'>
                        <label tw='ml-[1.5rem] text-light_pink' htmlFor="password">Password</label>
                        <input tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem]   pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm    sm:text-xs max-w-full items-center'
                        autoComplete="current-password"
                        {...register("password", 
                            {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters' 
                                },
                                pattern: { 
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, 
                                    message: 'Password must contain at least one special character'
                                },
                            }
                        )}
                        id="password" type={showPassword ? "text" : "password"} placeholder="Please enter your password" 
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <ErrorP>{errors.password?.message}</ErrorP>
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
                        <LoginButton type="submit" >
                            Login
                        </LoginButton>
                        <LoginGoogle type="submit" disabled={authing} onClick={() => signInWithGoogle()}>
                            <FcGoogle tw='w-8 h-8' />  Login with Google
                        </LoginGoogle>
                    </div>
                </form>
                {/* <DevTool control={control} /> */}
            </div>
        </div>  
    )
}

export default Login
