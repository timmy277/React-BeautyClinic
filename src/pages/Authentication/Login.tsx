import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import tw from "twin.macro";
import { GrayP, TwButton, TwTitle_LG } from "../../components/Material";
import { Link, useNavigate } from "react-router-dom";
import { fetchSignInMethodsForEmail, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const [errors, setErrors] = useState<{ email?: string, password?: string }>({});

    const LoginTitle = tw(TwTitle_LG)`text-center text-light_pink mb-[4rem]`
    const Icon = tw.div`absolute right-[3.6rem] top-[45%] transform -translate-y-1/2 cursor-pointer`;

    const LoginP = tw(GrayP)`text-center mb-4`
    const LoginSpan = tw.span`text-dark_blue`
    const LoginButton = tw(TwButton)`block mx-auto px-[45%] mb-8 h-[4rem]`
    const LoginGoogle = tw(LoginButton)`text-nowrap px-[33%] flex items-center gap-4`


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors: { email?: string, password?: string } = {};

        const signInMethods = await fetchSignInMethodsForEmail(auth, email);
        if (signInMethods.length < 0) {
            formErrors.email = 'This email is not exist';
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


        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert('Logged in successfully!');
                navigate('/');
            } catch (error) {
                console.error(error);
                alert('Email or password is incorrect');
            }
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
        <div tw='max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[3%] pt-[5%] pb-[5%] rounded-[3rem]'>
            <form onSubmit={handleLogin}>
                <LoginTitle>Login</LoginTitle>
                <label tw='mb-[-2rem] ml-[1.5rem] text-light_pink'>Email</label>
                <input tw='border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem]    text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full w-full mb-[2. 395rem] items-center'
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                name="" id="" placeholder="Please enter your email" />
                {errors.email && <p tw='text-red-500'>{errors.email}</p>}

                <div tw='relative mt-8'>
                    <label tw='ml-[1.5rem] text-light_pink' htmlFor="pass">Password</label>
                    <input tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full mb-[2.395rem] items-center'
                    // {...register("password",{ required: true, minLength: 8})}
                    id="pass" type={showPassword ? "text" : "password"} placeholder="Please enter your password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {/* {errors.password && <p>{errors.password.message}</p>} */}
                    {errors.password && <p tw='text-red-500'>{errors.password}</p>}
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
                    <LoginButton type="submit">
                        {/* {isSignIn ? 'Loading...' : 'Login'} */}Login
                    </LoginButton>
                    <LoginGoogle type="submit" disabled={authing} onClick={() => signInWithGoogle()}>
                        <FcGoogle tw='w-8 h-8 mx-auto' />  Login with Google
                    </LoginGoogle>
                </div>
            </form>
        </div>
    )
}

export default Login
