import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginDispatcher, logoutDispatcher } from '../redux/authActions';
// import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// import Spinner from "../assests/images/Spinner.gif";
// import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, Link } from 'react-router-dom';
import AlertBox from '../Prompts/AlertBox';
import Spinner from "../components/Spinner";


const Login = () => {
    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
    // const [loader, setloader] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { success, error } = useSelector(state => state.auth.details);
    const { loading } = useSelector(state => state.loading);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });
    // console.log("success", success);
    // useEffect(() => {
    //     success && navigate('/');
    //     // success && setLoading(true);
    //     // error === "Please try to login with correct details" && alert(error);
    //     // authToken && localStorage.setItem
    // }, [success, error]);

    useEffect(() => {
        success && navigate('/project');
        // loading && setloader(true);
        // !loading && setloader(false);
    }, [loading, success, error]);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleChange = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
        // console.log(loginDetails);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        // dispatch(logoutDispatcher());
        // console.log(loginDetails);
        dispatch(loginDispatcher(loginDetails));
        success && navigate('/project');
        // error && alert(" Handle Login error");
    };
    const validate = (fieldName) => {
        switch (fieldName) {
            case 'email':
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if (!emailRegex.test(loginDetails.email)) {
                    setErrors({ ...errors, email: true });
                } else {
                    setErrors({ ...errors, email: false });
                }
                break;
            case 'password':
                if (loginDetails.password.length < 5) {
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
                    </div> */}
            {/* <div className="sc tj fv vs">
                        <div className="li ls gs go">
                            <div className="sh tj ce">
                                <h1 className="h1 nw">Oh, No! You stumbled upon a rarity</h1>
                                <div className="nx">
                                    <Link className="n cz au pl" to="/">Go back home</Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
            {/* <div className="min-h-screen flex justify-center items-center font-sans login bg-cover">
                        <div className="max-w-sm m-4 p-10 bg-gray-900 bg-opacity-75 rounded shadow-xl">
                            <p className="text-white font-medium text-center mb-6 text-2xl italic lg:font-bold">LOGIN</p>
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
                                        error={errors.email}
                                        onChange={(e) => { handleChange(e); }}
                                        onKeyUp={() => validate("email")}
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
                                            error={errors.password}
                                            onChange={(e) => { handleChange(e); }}
                                            onKeyUp={() => validate("password")}
                                            name="password"
                                            // sx={{ backgroundColor: "#F5F5F5" }}
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
                                <button onClick={handleLogin} disabled={(errors.email || errors.password)} className={`${(errors.email || errors.password) ? ("cursor-not-allowed") : "cursor-pointer"} px-8 py-1 text-white font-light tracking-wider bg-red-300 hover:bg-gray-800 rounded`}
                                    type="submit">
                                    {loading ? <Spinner /> : "Signup"}
                                </button>
                                <span className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"><Link to="/signup">Don't have a Account ?<br /><span> Create Account</span></Link></span>
                            </div>
                            <div className="text-center">
                            </div>
                        </div >
                    </div >
                </section>

            </main> */}
            <main className="sj">
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
                    {/* <main className="sj">
                        <section className="am ay ak">
                            <div className="sc tj fv vs">
                                <div className="li ls gs go"> */}
                    <div className="sg tj pt-40 pb-20 w-3/4">
                        <TextField
                            error={errors.email}
                            onChange={(e) => { handleChange(e); }}
                            onKeyUp={() => validate("email")}
                            name="email"
                            sx={{ marginBottom: 2, backgroundColor: "#F5F5F5", width: "100%" }}
                            color="success"
                            variant='filled'
                            id="email"
                            label="Email"
                        />
                        <FormControl error={errors.password} color="success" sx={{ marginBottom: 2, width: '100%', backgroundColor: "#F5F5F5" }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <FilledInput
                                error={errors.password}
                                onChange={(e) => { handleChange(e); }}
                                onKeyUp={() => validate("password")}
                                name="password"
                                // sx={{ backgroundColor: "#F5F5F5" }}
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
                        <div className="ii ue na nw">
                            <div className="ij fh">
                            </div>
                        </div>
                        <div className="ii ue na ro">
                            <div className="ij fh">
                                <button onClick={handleLogin} disabled={errors.name || errors.email || errors.password} className={`n cz au pl ij ${(errors.name || errors.email || errors.password) ? "cursor-not-allowed" : "cursor-pointer"}`}>{loading ? <Spinner /> : "Sign In"}</button>
                            </div>
                        </div>
                        <div className="ii un nf">
                            <div className="uq an sj rs" aria-hidden="true"></div>
                            <div className="c_ cv">Or</div>
                            <div className="uq an sj nm" aria-hidden="true"></div>
                        </div>
                        <div className="c_ ce ro">
                            Don't have an account?
                            <Link className="ht pg hq pn po" to="/signup"> Sign Up</Link>
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
export default Login;
//  background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');