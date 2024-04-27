import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutDispatcher, signupDispatcher } from '../redux/authActions';
// import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import Spinner from "../components/Spinner";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, Link } from 'react-router-dom';
import AlertBox from '../Prompts/AlertBox';

const Signup = () => {
    const [signupDetails, setSignupDetails] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { success, error } = useSelector(state => state.auth.details);
    const { loading } = useSelector(state => state.loading);
    const [showPassword, setShowPassword] = useState(false);
    // const [showCPassword, setShowCPassword] = useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // const handleClickShowCPassword = () => setShowCPassword((show) => !show);

    // const handleMouseDownCPassword = (event) => {
    //     event.preventDefault();
    // };
    const handleChange = (e) => {
        setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
        console.log(signupDetails);
    };
    const handleSignup = (e) => {
        // dispatch(logoutDispatcher());
        console.log("hehe");
        e.preventDefault();
        console.log(signupDetails);
        dispatch(signupDispatcher(signupDetails));
    };
    useEffect(() => {
        success && navigate('/project');
        error === "Sorry a user with this email already exists" && alert(error);
        // authToken && localStorage.setItem

        // eslint-disable-next-line
    }, [success, error]);

    const validate = (fieldName) => {
        console.log("eoorf");
        console.log("eoorf", logoutDispatcher());
        switch (fieldName) {
            case 'name':
                if (signupDetails.name.length < 4) {
                    setErrors({ ...errors, name: true });
                } else {
                    setErrors({ ...errors, name: false });
                }
                break;
            case 'email':
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if (!emailRegex.test(signupDetails.email)) {
                    setErrors({ ...errors, email: true });
                } else {
                    setErrors({ ...errors, email: false });
                }
                break;
            case 'password':
                if (signupDetails.password.length < 5) {
                    setErrors({ ...errors, password: true });
                } else {
                    setErrors({ ...errors, password: false });
                }
                break;
            default:
                break;
        }
    };

    return (
        <>
            {/* <main className="sj">
                <section className="j">
                    <div className="_ tr om or nb ti w tc" aria-hidden="true">
                        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                                    <stop stopColor="#FFF" offset="0%"></stop>
                                    <stop stopColor="#EAEAEA" offset="77.402%"></stop>
                                    <stop stopColor="#DFDFDF" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g fill="url(#illustration-01)" fillRule="evenodd">
                                <circle cx="1232" cy="128" r="128"></circle>
                                <circle cx="155" cy="443" r="64"></circle>
                            </g>
                        </svg>
                    </div>
                    <div className="min-h-screen flex flex-1 justify-center items-center font-sans login bg-cover">
                        <div className="max-w-sm m-4 p-10 bg-gray-900 bg-opacity-75 rounded shadow-xl">
                            <p className="text-white font-medium text-center mb-6 text-2xl italic lg:font-bold">SIGN UP</p>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        error={errors.name}
                                        onChange={(e) => { handleChange(e); }}
                                        onKeyUp={() => validate("name")}
                                        sx={{ marginBottom: 2, backgroundColor: "#F5F5F5" }}
                                        color="success"
                                        variant='filled'
                                        name="name"
                                        id="username"
                                        label="Username"
                                    />
                                    <TextField
                                        onChange={(e) => { handleChange(e); }}
                                        onKeyUp={() => validate("email")}
                                        error={errors.email}
                                        name="email"
                                        sx={{ marginBottom: 2, backgroundColor: "#F5F5F5" }}
                                        color="success"
                                        variant='filled'
                                        id="email"
                                        label="Email"
                                    />
                                    <FormControl error={errors.password} color="success" sx={{ marginBottom: 2, width: '100%', backgroundColor: "#F5F5F5" }} variant="filled">
                                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                        <FilledInput
                                            onChange={(e) => { handleChange(e); }}
                                            onKeyUp={() => validate("password")}
                                            name="password"
                                            error={errors.password}
                                            id="filled-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </div>
                            </Box>
                            <div className="mt-4 items-center flex justify-between">
                                <button onClick={handleSignup} disabled={(errors.name || errors.email || errors.password)} className={`${(errors.name || errors.email || errors.password) ? ("cursor-not-allowed") : "cursor-pointer"} px-8 ${loading ? "" : "py-1"} text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded`}
                                    type="submit">
                                    {loading ? <Spinner /> : "Signup"}
                                </button>
                                <span className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"><Link to="/login"> Already have a Account ?<br /><span> Login</span></Link></span>
                            </div>
                            <div className="text-center">
                            </div>
                        </div>
                    </div >
                </section>
            </main> */}
            <main className="sj">
                <section className="j">
                    <div className="_ tr !hidden sm:!block om or nb ti w tc" aria-hidden="true">
                        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                                    <stop stopColor="#FFF" offset="0%"></stop>
                                    <stop stopColor="#EAEAEA" offset="77.402%"></stop>
                                    <stop stopColor="#DFDFDF" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g fill="url(#illustration-01)" fillRule="evenodd">
                                <circle cx="1232" cy="128" r="128"></circle>
                                <circle cx="155" cy="443" r="64"></circle>
                            </g>
                        </svg>
                    </div>
                    {/* <main className="sj">
                        <section className="am ay ak">
                            <div className="sc tj fv vs">
                                <div className="li ls gs go"> */}
                    <div className="sg tj pt-40 pb-10 w-3/4">
                        <div className="ii ue na nw">
                            <div className="ij fh">
                                {/* <label className="block he cn cc re" for="email">Email</label> */}
                                <TextField
                                    error={errors.name}
                                    onChange={(e) => { handleChange(e); }}
                                    onKeyUp={() => validate("name")}
                                    sx={{ marginBottom: 2, backgroundColor: "#F5F5F5", width: "100%" }}
                                    color="success"
                                    variant='filled'
                                    name="name"
                                    id="username"
                                    label="Username"
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                {/* <label className="block he cn cc re" for="email">Email</label> */}
                                <TextField
                                    onChange={(e) => { handleChange(e); }}
                                    onKeyUp={() => validate("email")}
                                    error={errors.email}
                                    name="email"
                                    sx={{ marginBottom: 2, backgroundColor: "#F5F5F5", width: "100%" }}
                                    color="success"
                                    variant='filled'
                                    id="email"
                                    label="Email"
                                />
                            </div>
                        </div>
                        <div className="ii ue na nw">
                            <div className="ij fh">
                                {/* <div className="ii uo">
                                                <label className="block he cn cc re" for="password"
                                                >Password</label>
                                            </div> */}
                                <FormControl error={errors.password} color="success" sx={{ marginBottom: 2, width: '100%', backgroundColor: "#F5F5F5" }} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                    <FilledInput
                                        onChange={(e) => { handleChange(e); }}
                                        onKeyUp={() => validate("password")}
                                        name="password"
                                        error={errors.password}
                                        id="filled-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        </div>
                        <div className="ii ue na nw">
                            <div className="ij fh">
                            </div>
                        </div>
                        <div className="ii ue na ro">
                            <div className="ij fh">
                                <button onClick={handleSignup} disabled={errors.name || errors.email || errors.password} className={`n cz au pl ij ${(errors.name || errors.email || errors.password) ? "cursor-not-allowed" : "cursor-pointer"}`}>{loading ? <Spinner /> : "Sign Up"}</button>
                            </div>
                        </div>
                        <div className="ii un nf">
                            <div className="uq an sj rs" aria-hidden="true"></div>
                            <div className="c_ cv">Or</div>
                            <div className="uq an sj nm" aria-hidden="true"></div>
                        </div>
                        <div className="c_ ce ro">
                            Already, have an account?
                            <Link className="ht pg hq pn po" to="/login"> Sign in</Link>
                        </div>
                    </div>

                    {/* </div>
                            </div>
                        </section>
                    </main> */}
                </section>
            </main>
            <AlertBox />
        </>
    );
};
export default Signup;
