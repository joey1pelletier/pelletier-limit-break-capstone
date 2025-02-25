import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

function Login({setIsAuth}) {
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        })
    }

    return (
        <>
        <div className="loginPage">
            <p>Welcome to Limit Break! Please sign in.</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in With Google
            </button>
        </div>
        </>
    )
}

export default Login;