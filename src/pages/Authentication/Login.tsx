import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import tw from "twin.macro";
import { GrayP, TwButton, TwTitle_LG } from "../../components/Material";
import { Link, useNavigate } from "react-router-dom";
import { fetchSignInMethodsForEmail, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const [errors, setErrors] = useState<{ email?: string, password?: string }>({});
    const location = useLocation();

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
        const formErrors: { email?: string, password?: string } = {};

        
        if (!email) {
            formErrors.email = 'Email is required';
        }
        else if (!/^\S+@\S+$/i.test(email)) {
            formErrors.email = 'Entered value does not match email format';
        }
        else if (email.length > 20) {
            formErrors.email = 'Email must be less than 20 characters';
        }
        if (!password) {
            formErrors.password = 'Password is required';
        }
        else if (password.length < 8) {
            formErrors.password = 'Password must be at least 8 characters';
        }
        else if (!/[A-Z]/.test(password)){
            formErrors.password = 'Password must contain at least one uppercase letter';
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            formErrors.password = 'Password must contain at least one special character';
        }
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                const signInMethods = await fetchSignInMethodsForEmail(auth, email);
                if (signInMethods.length < 0) {
                    formErrors.email = 'This email is not exist';
                }
                await signInWithEmailAndPassword(auth, email, password);
                navigate('/');
                toast.success('Logged in successfully!');
            } catch (error) {
                console.error(error);
                toast.error('Email or password is incorrect');
            }
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
    // console.log(isLoginSuccessful);

    return (
        <div tw='w-full max-w-full 2lg:px-[20%] lg:px-[20%] md:px-[10%] sm:px-[10%]'>  
            <div tw='max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[3%] pt-[5%] pb-[5%] rounded-[3rem] md:mt-[5%] sm:mt-[5%]'>
                <form onSubmit={handleLogin}>
                    <LoginTitle >Login</LoginTitle>
                    <label tw='mb-[-2rem] ml-[1.5rem] text-light_pink'>Email</label>
                    <input tw='border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] 
                    pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full    w-full mb-[2. 395rem] items-center'
                    autoComplete="email"
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    name="" id="" placeholder="Please enter your email" />
                    {errors.email && <ErrorP>{errors.email}</ErrorP>}
                    <div tw='relative mt-8'>
                        <label tw='ml-[1.5rem] text-light_pink' htmlFor="pass">Password</label>
                        <input tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem]   pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm    sm:text-xs max-w-full items-center'
                        autoComplete="current-password"
                        id="pass" type={showPassword ? "text" : "password"} placeholder="Please enter your password" 
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {errors.password && <ErrorP>{errors.password}</ErrorP>}
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
                    {/* <ToastContainer /> */}
                </form>
            </div>
        </div>  
    )
}

export default Login
