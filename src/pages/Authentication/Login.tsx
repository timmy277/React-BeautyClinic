import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import tw from "twin.macro";
import { GrayP, TwButton, TwTitle_LG } from "../../components/Material";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const LoginTitle = tw(TwTitle_LG)`text-center text-light_pink mb-[4rem]`
    const Icon = tw.div`absolute right-[3.6rem] top-[45%] transform -translate-y-1/2 cursor-pointer`;

    const LoginP = tw(GrayP)`text-center mb-4`
    const LoginSpan = tw.span`text-dark_blue`
    const LoginButton = tw(TwButton)`block mx-auto px-[45%] mb-8`
    const LoginGoogle = tw(LoginButton)`text-nowrap px-[36.5%]`


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // const { email, password } = data;
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
        <div tw='max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[3%] pt-[5%] pb-[5%] rounded-[3rem]'>
            <form onSubmit={handleLogin}>
                <LoginTitle>Login</LoginTitle>
                <label tw='mb-[-2rem] ml-[1.5rem]'>Email</label>
                <input tw='border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem]    text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full w-full mb-[2. 395rem] items-center' 
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                name="" id="" placeholder="Please enter your email" />
                {/* {errors.email && <p>{errors.email.message}</p>} */}

                <div tw='relative mt-8'>
                    <label tw='ml-[1.5rem]' htmlFor="pass">Password</label>
                    <input tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full mb-[2.395rem] items-center'
                    id="pass" type={showPassword ? "text" : "password"} placeholder="Please enter your password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
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
                        Login With Google
                    </LoginGoogle>
                </div>
            </form>
        </div>
    )
}

export default Login
