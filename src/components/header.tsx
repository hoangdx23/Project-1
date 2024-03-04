import { Link } from "react-router-dom";
import "../features/css/header.css";
const Header = () => {
  return (
    <div>
      <div className="menu-container">
        <ul className="menu">
          <Link to={"/"}>
            <img
              className="img"
              src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
              alt=""
            />
          </Link>
          <li>
            <a href="#">New & Featured</a>
          </li>
          <li>
            <a href="#">SHOP ALL</a>
          </li>
          <li>
            <a href="#">TOPS</a>
          </li>
          <li>
            <a href="#">BOTTOMS</a>
          </li>
          <li>
            <a href="#">OUTERWEAR</a>
          </li>
          <li>
            <a href="#">FOOTWEAR</a>
          </li>
          <div className="a-right">
            <li>
              <Link to={"/login"}>ĐĂNG NHẬP</Link>
            </li>
            <li>
              <Link to={"/reginster"}>ĐĂNG KÍ</Link>
            </li>
            <li>
              <a href="#">GIỎ HÀNG </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
