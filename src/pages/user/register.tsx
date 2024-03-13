import { Link } from "react-router-dom";
import "../../features/css/login.css";
const Reginster = () => {
  return (
    <div className="a">
      <div className="container">
        <div className="login-container">
          <h1>Create and account</h1>
          <form>
            <label htmlFor="">your email</label>
            <input type="text" />
            <label htmlFor="">password</label>
            <input type="text" />
            <label htmlFor="">confirm password</label>
            <input type="text" />
            <p className="checkbox">
              {" "}
              <input type="checkbox" />I accept the Terms and Conditions
            </p>
            <button type="submit">Create and account</button>
            <div>
              <p>
                {" "}
                Already have an account?<Link to={"/login"}> Login here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Reginster;
