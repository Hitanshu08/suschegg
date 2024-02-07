import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const SignUpPage = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isTncAccepted, setIsTncAccepted] = useState(false)

    const handleCheckboxClick = () => {
        setIsTncAccepted(!isTncAccepted);
    }
    const handleSignUp = () => {
        // Define your API endpoint
        const apiUrl = 'http://127.0.0.1:5000/user';

        // Define your data object
        const userData = {
            email: email.toLowerCase(),
            username: username,
            password: password
        };

        // Define request options
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };

        // Make the API call
        fetch(apiUrl, requestOptions)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log('User created successfully:', data);
                // Handle success, if needed
            })
            .catch(error => {
                console.error('Error creating user:', error);
                // Handle error, if needed
            });

    }

    return (
        <div className='loginpage-container'>
            <div className='loginpage-message-wrapper signuppage-wrapper'>
                <div className='loginpage-message-title'>Welcome !</div>
                <div className='loginpage-message'>Use these awesome forms to login or create new account in your project for free.</div>
            </div>
            <div className='login-container'>
                <div className='login-container-title'>Register with</div>
                <div className='login-app-buttons'>
                    {/* <div className='login-app-button facebook-button'></div>
          <div className='login-app-button apple-button'></div> */}
                    <div className='login-app-button google-button'>
                        <svg width="20px" height="28px" viewBox="0 0 64 64" version="1.1">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(3.000000, 2.000000)" fillRule="nonzero">
                                    <path d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267" fill="#4285F4"></path>
                                    <path d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667" fill="#34A853"></path>
                                    <path d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782" fill="#FBBC05"></path>
                                    <path d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769" fill="#EB4335"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='login-container-devider'>
                    <p>or</p>
                </div>
                <div className='login-input username-input'>
                    <input type="text" className="form-control" placeholder="Enter your user name" aria-label="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='login-input email-input'>
                    <input type="email" className="form-control" placeholder="Enter your email address" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='login-input password-input'>
                    <input type="password" className="form-control" placeholder="Enter your password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='signup-check-container'>
                    <input className="signup-check-input" type="checkbox" id="rememberMe" data-gtm-form-interact-field-id="0" value={isTncAccepted} onClick={() => handleCheckboxClick()} />
                    <label className="signup-check-label" htmlFor="rememberMe">I agree the <span onClick={() => { navigate('/terms-and-conditions') }}>Terms and Conditions</span></label>
                </div>
                <div className='login-submit-button'>
                    <button className={`sign-in-button ${!isTncAccepted && 'disabled'}`} disabled={!isTncAccepted} onClick={() => handleSignUp()}>Sign up</button>
                </div>
                <div className='sign-up-button'>
                    ALready have an account <span
                        onClick={() => { navigate('/login') }}
                    >Log in</span>
                </div>
            </div>
        </div>
    )
}
