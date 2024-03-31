import Banner from "./layouts/banner";
import Footer from "./layouts/footer";
import "../features/css/header.css";
import Home from "../pages/user/home";
import Header from "./layouts/header";
const UserShell = () => {
  return (
    <div className="w-[1500px] m-auto" >
      <Header />
      <Banner />
      <main className="flex justify-center items-center">
        <Home />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default UserShell;
