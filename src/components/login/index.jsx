import './style.css';

const Login = () => {
    return (
        <>
            <p className="loginVisibility">click here if you wanna<br/>
                hide or show «log in section»</p>
            <div className="loginForm">
                <label>
                    <input type="text" placeholder="ENTER USER NAME" name="uname" required/>
                    <input type="text" placeholder="CREATE OR WRITE AN EXISTING ROOM ID" name="uname" required/>
                </label>
                <button className="loginForm_button">JOIN</button>
            </div>
        </>
    )
}

export default Login;
