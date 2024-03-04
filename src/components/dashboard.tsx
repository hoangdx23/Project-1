import { Link } from "react-router-dom"
import "../features/css/dashboard.css"
const Dashboard=()=>{
    return (
        <div>
             <div className="sidebar1">
        <div className="menu1">
        <div className="menu-item1">
                <a href="#"> <Link to={"/"}>
            <img className="img" src="https://theme.hstatic.net/1000306633/1000891824/14/logo.png?v=587" alt=""/>
            </Link></a>
            </div>
            <div className="menu-item1">
                <a href="#">DASHBOARD</a>
            </div>
            <div className="menu-item1">
                <a href="#">SẢN PHẨM</a>
            </div>
            <div className="menu-item1">
                <a href="#">NGƯỜI DÙNG</a>
            </div>
        </div>
    </div>
        </div>
    )
}
export default Dashboard