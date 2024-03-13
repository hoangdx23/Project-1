import { Link } from "react-router-dom";
import "../../features/css/login.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="a">
      <div className="container">
        <div className="login-container">
          <h1>Login</h1>
          <form>
            <label htmlFor="">user name</label>
            <input type="text" />
            <label htmlFor="">password</label>
            <input type="text" />
            <label htmlFor="">warehouse code</label>
            <input type="text" />
            <button type="submit">Login</button>
            <div>
              <p>
                {" "}
                Don't have an account?
                <Link to={"/register"}> Login here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
