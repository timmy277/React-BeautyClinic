import tw from "twin.macro"
import { GrayP, TwButton, TwTitle_LG } from "../../components/Material"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { fetchSignInMethodsForEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [cfPassword, setCfPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showCfPassword, setShowCfPassword] = useState(false);
    const [errors, setErrors] = useState<{username?: string, email?: string, password?: string,  cfPassword?: string }>({});
    const auth = getAuth();
    const navigate = useNavigate();
    const RegisterTitle = tw(TwTitle_LG)`text-center text-light_pink mb-[4rem]`
    const Icon = tw.div`absolute right-[3.6rem] top-[3.6rem] transform -translate-y-1/2 cursor-pointer`;
    const RegisterP = tw(GrayP)`text-center mb-4`
    const RegisterSpan = tw.span`text-dark_blue`
    const RegisterButton = tw(TwButton)`block mx-auto w-full mb-8 h-[4rem]`
    const ErrorP = tw(GrayP)`text-red-500 ml-[1.5rem] mb-4`

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors: { username?: string, email?: string, password?: string,  cfPassword?: string } = {};

        if (!username) {
            formErrors.username = 'Username is required';
        } 
        if (!email) {
            formErrors.email = 'Email is required';
        } else if (!/^\S+@\S+$/i.test(email)) {
            formErrors.email = 'Entered value does not match email format';
        } else if (email.length > 20) {
            formErrors.email = 'Email must be less than 20 characters';
        }
        if (!password) {
            formErrors.password = 'Password is required';
        } else if (password.length < 8) {
            formErrors.password = 'Password must be at least 8 characters';
        }

        else if (!/[A-Z]/.test(password)){
            formErrors.password = 'Password must contain at least one uppercase letter';
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            formErrors.password = 'Password must contain at least one special character';
        }


        if (!cfPassword) {
            formErrors.cfPassword = 'Password is required';
        } else if (cfPassword.length < 8) {
            formErrors.cfPassword = 'Password must be at least 8 characters';
        }

        else if (!/[A-Z]/.test(cfPassword)){
            formErrors.cfPassword = 'Password must contain at least one uppercase letter';
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(cfPassword)){
            formErrors.cfPassword = 'Password must contain at least one special character';
        }

        if(password!==cfPassword){
            formErrors.password = 'Passwords do not match';
            formErrors.cfPassword = 'Passwords do not match';
        }


        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            try {
                const signInMethods = await fetchSignInMethodsForEmail(auth, email);
                if (signInMethods.length > 0) {
                    formErrors.email = 'This email is already registered';
                    setErrors(formErrors);
                    return;
                }
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                await updateProfile(user, { displayName: username });
                toast.success('Registered successfully!');
                navigate('/Login', { state: { email, password } });

            } catch (error) {
                console.error(error);
                toast.error('Registration failed');
            }
    }
    };

    return (
        <div tw='w-full max-w-full 2lg:px-[20%] lg:px-[20%] md:px-[10%] sm:px-[10%]'>  
            <div tw='max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[3%] pt-[5%] pb-[5%] rounded-[3rem] md:mt-[5%] sm:mt-[5%]'>
                <form onSubmit={handleSignUp}  >
                    <RegisterTitle>Register</RegisterTitle>
                    
                    <label tw='mb-[-2rem] ml-[1.5rem] text-light_pink'>Username</label>
                    <input tw='border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full   w-full items-center' 
                    type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                    name="" id="" placeholder="Please enter your name" />
                    {errors.username && <ErrorP>{errors.username}</ErrorP>}

                    <div tw='mt-8'>
                        <label tw='mb-[-2rem] ml-[1.5rem] text-light_pink'>Email</label>
                        <input tw='border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full   w-full items-center' 
                        type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        name="" id="" placeholder="Please enter your email" />
                        {errors.email && <ErrorP>{errors.email}</ErrorP>}
                    </div>
                    <div tw='relative mt-8'>
                        <label tw='ml-[1.5rem] text-light_pink' htmlFor="pass" >Password</label>
                        <input tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem]   pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm    sm:text-xs max-w-full items-center' 
                        id="pass" type={showPassword ? "text" : "password"} placeholder="Please enter your password" 
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {errors.password && <ErrorP>{errors.password}</ErrorP>}
                        <Icon onClick={() => setShowPassword((prev) => !prev) }>
                            {showPassword ? <FaEye tw='w-8 h-8' /> : <FaEyeSlash tw='w-8 h-8' />}
                        </Icon>
                    </div>
                    <div tw='relative mt-8'>
                        <label tw='ml-[1.5rem] text-light_pink' htmlFor="confirmPass">Password</label>
                        <input tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full items-center' 
                        id="confirmPass" type={showCfPassword ? "text" : "password"} placeholder="Please confirm your password" 
                        value={cfPassword} onChange={(e) => setCfPassword(e.target.value)}/>
                        {errors.cfPassword && <ErrorP>{errors.cfPassword}</ErrorP>}
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
