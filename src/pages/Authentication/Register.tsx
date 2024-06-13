import tw from "twin.macro"
import { GrayP, TwButton, TwTitle_LG } from "../../components/Material"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [cfPassword, setCfPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showCfPassword, setShowCfPassword] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();

    const RegisterTitle = tw(TwTitle_LG)`text-center text-light_pink mb-[4rem]`
    const Icon = tw.div`absolute right-[3.6rem] top-[45%] transform -translate-y-1/2 cursor-pointer`;

    const RegisterP = tw(GrayP)`text-center mb-4`
    const RegisterSpan = tw.span`text-dark_blue`
    const RegisterButton = tw(TwButton)`block mx-auto px-[45%] mb-8`


    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('User created successfully!');
            navigate('/Login');
        } catch (error) {
            console.error(error);
            alert('Error creating user');
        }
    };

    return (
        <div tw='max-w-[50rem] bg-white shadow-md mx-auto mt-[2%] px-[3%] pt-[5%] pb-[5%] rounded-[3rem]'>
            {/* {userLoggedIn && <Navigate to="/" replace={true} /> }  */}
            <form onSubmit={handleSignUp}  autoComplete="off">
            <RegisterTitle>Register</RegisterTitle>
                <label tw='mb-[-2rem] ml-[1.5rem]'>Email</label>
                <input tw='border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem]    text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full w-full mb-[2. 395rem] items-center' autoComplete="off"
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                name="" id="" placeholder="Please enter your email" />
                {/* {errors.email && <p>{errors.email.message}</p>} */}

                <div tw='relative mt-8'>
                    <label tw='ml-[1.5rem]' htmlFor="pass" >Password</label>

                    <input tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full mb-[2.395rem] items-center' 
                    id="pass" type={showPassword ? "text" : "password"} placeholder="Please enter your password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Icon onClick={() => setShowPassword((prev) => !prev) }>
                        {showPassword ? <FaEye tw='w-8 h-8' /> : <FaEyeSlash tw='w-8 h-8' />}
                    </Icon>
                </div>
                <div tw='relative mt-0'>
                    <label tw='ml-[1.5rem]' htmlFor="confirmPass">Password</label>

                    <input tw='w-full px-4 py-2 border border-solid h-[3.849rem] border-[#D9DDFE] rounded-2xl pt-[1.063rem] pr-[0rem] pb-[1.1rem] pl-[1.5rem] text-dark_blue font-poppins text-base leading-6 tracking-widest font-normal md:text-sm sm:text-xs max-w-full mb-[2.395rem] items-center' 
                    id="confirmPass" type={showCfPassword ? "text" : "password"} placeholder="Please confirm your password" 
                    value={cfPassword} onChange={(e) => setCfPassword(e.target.value)}/> 
                    <Icon onClick={() => setShowCfPassword((prev) => !prev) }>
                        {showCfPassword ? <FaEye tw='w-8 h-8' /> : <FaEyeSlash tw='w-8 h-8' />}
                    </Icon>
                </div>
                <RegisterP>Already have an account?
                    <RegisterSpan>
                        <Link to="/Login">Login</Link>
                    </RegisterSpan>
                </RegisterP>
                <div tw= 'w-full'>
                    <RegisterButton type="submit">Register</RegisterButton>
                </div>
            </form>
        </div>
    )
}

export default Register
