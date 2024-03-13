import { Link } from "react-router-dom";
import "../../features/css/header.css";
const Header = () => {
  return (
    <div x-data="{ menuOpen: false }">
      <header className="z-50 top-0 inset-x-0">
        <nav className="lg:px-8 p-6 justify-between items-center flex ">
          <div className="lg:flex-1 flex">
            <a href="/" className="p-1.5 -m-1.5 decoration-inherit">
              <span className="t">Company</span>
              <img
                className="w-auto h-8 "
                src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
                alt=""
              />
            </a>
          </div>
          <div className="lg:hidden flex">
            <button
              x-on:click="menuOpen = !menuOpen"
              type="button"
              className="text-gray-400 p-2.5 inline-flex rounded-md	items-center justify-center	-m-2.5"
            >
              <span x-show="menu" className="t">
                Company
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>
          <div className="lg:gap-x-8 lg:flex hidden">
            <a
              href="#"
              className="text-black leading-6 text-sm decoration-inherit font-semibold"
            >
              New & Featured
            </a>
            <a
              href="#"
              className="text-black leading-6 text-sm decoration-inherit font-semibold"
            >
              SHOP ALL
            </a>
            <a
              href="#"
              className="text-black leading-6 text-sm decoration-inherit font-semibold"
            >
              TOPS
            </a>
            <a
              href="#"
              className="text-black leading-6 text-sm decoration-inherit font-semibold"
            >
              BOTTOMS
            </a>
            <a
              href="#"
              className="text-black leading-6 text-sm decoration-inherit font-semibold"
            >
              OUTERWEAR
            </a>
            <a
              href="#"
              className="text-black leading-6 text-sm decoration-inherit font-semibold"
            >
              FOOTWEAR
            </a>
          </div>
          <div className="w-px h-full bg-gray-400"></div>
          <div className="lg:justify-end lg:flex-1 lg:flex hidden gap-2">
            <Link
              to={"/cart"}
              className="text-black font-semibold leading-6 text-sm decoration-inherit"
            >
              <img
                className="w-auto h-8"
                src="https://cdn-icons-png.freepik.com/512/1413/1413908.png"
                alt=""
              />
            </Link>
            <Link
              to={"/login"}
              className="text-black font-semibold leading-8 text-sm decoration-inherit"
            >
              ĐĂNG NHẬP
            </Link>
            <Link
              to={"/register"}
              className="text-black font-semibold leading-8 text-sm decoration-inherit"
            >
              ĐĂNG KÝ
            </Link>
          </div>
        </nav>
        <div className="head"></div>
        <hr />
      </header>

      <div>
        <div x-show="menuOpen" className="fixed inset-0 z-50"></div>
        <div
          x-show="menuOpen"
          className="z-50 cit fixed sm:ring-1 sm:max-w-sm py-6 px-6 text-white overflow-y-auto	w-full z-50 right-0 inset-y-0 bg-white"
        >
          <div className="justify-between items-center flex">
            <a href="#" className="p-1.5 -m-1.5 decoration-inherit">
              <span className="t">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
                alt=""
              />
            </a>
            <button
              x-on:click="menuOpen = false"
              type="button"
              className="text-gray-700 p-2.5 rounded-md -m-2.5"
            >
              <span className="t">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 acc ack">
              <div className="py-6 abs">
                <a
                  href="#"
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3"
                >
                  New & Featured
                </a>
                <a
                  href="#"
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3"
                >
                  SHOP ALL
                </a>
                <a
                  href="#"
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3"
                >
                  TOPS
                </a>
                <a
                  href="#"
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3"
                >
                  BOTTOMS
                </a>
                <a
                  href="#"
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3"
                >
                  OUTERWEAR
                </a>
                <a
                  href="#"
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3"
                >
                  FOOTWEAR
                </a>
              </div>
              <hr />
              <div className="py-6">
                <Link
                  to={"/cart"}
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3"
                >
                  GIỎ HÀNG
                </Link>
                <Link
                  to={"/login"}
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3"
                >
                  ĐĂNG NHẬP
                </Link>
                <Link
                  to={"/register"}
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3"
                >
                  ĐĂNG KÝ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
