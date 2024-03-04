import Banner from "./banner";
import Footer from "./footer";
import "../features/css/header.css";
import Home from "../pages/user/home";
import Header from "./header";
const UserShell = () => {
  return (
    <div>
      <Header />
      <Banner></Banner>
      <main className="flex justify-center items-center">
        <Home />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default UserShell;
