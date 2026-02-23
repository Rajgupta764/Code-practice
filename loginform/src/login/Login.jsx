import { useState } from 'react'
import './login.css'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const [signupName, setSignupName] = useState('')
    const [signupEmail, setSignupEmail] = useState('')
    const [signupPassword, setSignupPassword] = useState('')
    const [signupConfirm, setSignupConfirm] = useState('')

    const [errors, setErrors] = useState({})

    const handleToggle = () => {
        setIsLogin(!isLogin)
        setErrors({})
    }

    const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value)
    const hasSpecialChar = (value) => /[^A-Za-z0-9]/.test(value)

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        const nextErrors = {}

        if (!loginEmail) nextErrors.loginEmail = 'Email is required.'
        else if (!isValidEmail(loginEmail)) nextErrors.loginEmail = 'Email must include @ and a domain.'

        if (!loginPassword) nextErrors.loginPassword = 'Password is required.'
        else if (!hasSpecialChar(loginPassword)) nextErrors.loginPassword = 'Password must contain a special character.'

        setErrors(nextErrors)
    }

    const handleSignupSubmit = (event) => {
        event.preventDefault()
        const nextErrors = {}

        if (!signupName) nextErrors.signupName = 'Full name is required.'
        if (!signupEmail) nextErrors.signupEmail = 'Email is required.'
        else if (!isValidEmail(signupEmail)) nextErrors.signupEmail = 'Email must include @ and a domain.'

        if (!signupPassword) nextErrors.signupPassword = 'Password is required.'
        else if (!hasSpecialChar(signupPassword)) nextErrors.signupPassword = 'Password must contain a special character.'

        if (!signupConfirm) nextErrors.signupConfirm = 'Confirm your password.'
        else if (signupConfirm !== signupPassword) nextErrors.signupConfirm = 'Passwords do not match.'

        setErrors(nextErrors)
    }

    return (
        <div className="container">
            <div className="form-container">
                <div className="toggle">
                    <button className={isLogin ? 'active' : ''} onClick={handleToggle}>login</button>
                    <button className={!isLogin ? 'active' : ''} onClick={handleToggle}>signup</button>
                </div>
            </div>

            {isLogin ? (
                <div className="form">
                    <h1>Login form</h1>
                    <form onSubmit={handleLoginSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={loginEmail}
                            onChange={(event) => setLoginEmail(event.target.value)}
                            className={errors.loginEmail ? 'has-error' : ''}
                        />
                        {errors.loginEmail && <p className="error">{errors.loginEmail}</p>}

                        <input
                            type="password"
                            placeholder="Password"
                            value={loginPassword}
                            onChange={(event) => setLoginPassword(event.target.value)}
                            className={errors.loginPassword ? 'has-error' : ''}
                        />
                        {errors.loginPassword && <p className="error">{errors.loginPassword}</p>}

                        <a href="#">Forgot password</a>
                        <button type="submit">Login</button>
                        <p>Not a member? <a onClick={handleToggle} href="#">Signup now</a></p>
                    </form>
                </div>
            ) : (
                <div className="form">
                    <h1>Signup form</h1>
                    <form onSubmit={handleSignupSubmit}>
                        <input
                            type="text"
                            placeholder="Full name"
                            value={signupName}
                            onChange={(event) => setSignupName(event.target.value)}
                            className={errors.signupName ? 'has-error' : ''}
                        />
                        {errors.signupName && <p className="error">{errors.signupName}</p>}

                        <input
                            type="email"
                            placeholder="Email"
                            value={signupEmail}
                            onChange={(event) => setSignupEmail(event.target.value)}
                            className={errors.signupEmail ? 'has-error' : ''}
                        />
                        {errors.signupEmail && <p className="error">{errors.signupEmail}</p>}

                        <input
                            type="password"
                            placeholder="Password"
                            value={signupPassword}
                            onChange={(event) => setSignupPassword(event.target.value)}
                            className={errors.signupPassword ? 'has-error' : ''}
                        />
                        {errors.signupPassword && <p className="error">{errors.signupPassword}</p>}

                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={signupConfirm}
                            onChange={(event) => setSignupConfirm(event.target.value)}
                            className={errors.signupConfirm ? 'has-error' : ''}
                        />
                        {errors.signupConfirm && <p className="error">{errors.signupConfirm}</p>}

                        <button type="submit">Signup</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Login
