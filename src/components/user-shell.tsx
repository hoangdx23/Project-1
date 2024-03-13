import Banner from "./layouts/banner";
import Footer from "./layouts/footer";
import "../features/css/header.css";
import Home from "../pages/user/home";
import Header from "./layouts/header";
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
