import { Link } from "react-router-dom";
import "../../features/css/baner.css";
const Banner = () => {
  return (
    <div className="containerbanner">
      <Link to={"/home"}>
        <img
          src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709394834476.jpg?x-oss-process=image/format,webp"
          alt=""
        />
      </Link>
    </div>
  );
};
export default Banner;
