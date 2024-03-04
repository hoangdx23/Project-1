import { Link } from "react-router-dom";
import "../features/css/baner.css";
const Banner = () => {
  return (
    <div className="containerbanner">
      <Link to={"/home"}>
        <img
          src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709394834476.jpg?x-oss-process=image/format,webp"
          alt=""
        />
        <h1 className="tieude"> New Arrivals</h1>
        <div className="sp">
          <div>
            <img
              src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709174613826.jpg?x-oss-process=image/format,webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709176119980.jpg?x-oss-process=image/format,webp"
              alt=""
            />
            <img
              src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709174641655.jpg?x-oss-process=image/format,webp"
              alt=""
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Banner;
