import './SignInPage.css'
import backgroundImage from '../../assets/background.png';
import { useState } from 'react';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function SignInPage() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    const [inputValues, setInputValues] = useState({ email: '', password: '' })

    const handleInputs = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = () => {
        if (inputValues.email && inputValues.password) {
            console.log(inputValues)
            setInputValues({ email: '', password: '' })
            alert('form submited successfully')
        }
        else {
            alert('please fill the form')
        }
    }


    return (
        <div className='SignIn-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='formContainer'>
                <h2>Sign in to your account</h2>
                <form className='signIn-form' onSubmit={(e) => e.preventDefault()}>


                    <div className='input-container'>
                        <label htmlFor='email'>Email</label>
                        <input value={inputValues.email} name='email' onChange={handleInputs} id='email' type='e mail' />
                    </div>

                    <div className='input-container'>
                        <label htmlFor='password'>Password <span> Forgot Your Password? </span></label>
                        <div id='password' className="password-input-div">
                            <input value={inputValues.password} name='password' onChange={handleInputs} type={showPassword ? "text" : 'password'} />
                            <i className="eye-icon" onClick={handleToggle}>
                                {showPassword ? (
                                    <IoMdEyeOff style={{ fontSize: '1.2em' }} />
                                ) : (
                                    <IoMdEye style={{ fontSize: '1.2em' }} />
                                )}
                            </i>
                        </div>
                    </div>

                    <button onClick={handleFormSubmit} className='btn'>Sign In</button>
                    <p onClick={() => navigate('/signup')} className="create-account"><span> Don't Have an account? </span><span className='sign-up-text'>Sign up</span></p>
                </form>
            </div>
        </div>
    )
}

export default SignInPage