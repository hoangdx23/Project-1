// import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
    <div>
        <div className="w-full border-b pt-2 z-50">
            <div className="w-10/12 m-auto flex justify-between">
                <div className="w-28 h-full">
                    <img
                        src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
                        className=""
                    />
                </div>
                <ul className="flex items-center relative">
                    <li className="flex items-center">
                        <div className="relative">
                            <button id="avatarBtn">
                                <img
                                    className="w-12 h-12 rounded-full border-2 border-gray-200"
                                    src="${infoUser.avatar}"
                                    alt="Avatar"
                                />
                            </button>
                            <div
                                className="absolute bottom-0 right-0 -mr-1 bg-green-700 rounded-full border-2 border-white"
                            >
                                <svg className="h-4 w-4 text-gray-100" viewBox="0 -2 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M6 6l4 4 4-4H6z" />
                                </svg>
                            </div>
                        </div>
                    </li>
                    <ul
                        id="navMenu"
                        className=" absolute hidden bg-white text-gray-700 border border-gray-200 rounded-md shadow-lg top-14 left-0 
                        w-40 z-50"
                    >
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Ngôn ngữ</a>
                        </li>
                        <li>
                            <a href="/" className="block px-4 py-2 hover:bg-gray-100">Trang người dùng</a>
                        </li>
                        <li>
                            <button id = "log-out" className="w-full px-4 py-2 hover:bg-gray-100 border-t font-bold">Đăng xuất</button>
                        </li>
                    </ul>
                </ul>
            </div>
            
        </div>
        <div x-data="{ menuOpen: false }">
      <header className="z-50 top-0 inset-x-0">
        <nav className="lg:px-8 justify-end items-center flex bg-red-600">
          <div className="xl:hidden flex p-5">
            <button
              x-on:click="menuOpen = !menuOpen"
              type="button"
              className="text-gray-400 p-2.5 inline-flex rounded-md	items-center justify-center	-m-2.5 "
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
          <div className="xl:gap-x-40 xl:flex hidden xl:m-auto ">
            <a
              href="#"
              className="text-white leading-6 text-2xl decoration-inherit font-semibold p-6 "
            >
            Tổng quan
            </a>
            <a
              href="#"
              className="text-white leading-6 text-2xl decoration-inherit font-semibold p-6 "
            >
            Sản phẩm
            </a>
            <a
              href="#"
              className="text-white leading-6 text-2xl decoration-inherit font-semibold p-6 "
            >
            Danh mục
            </a>
            <a
              href="#"
              className="text-white leading-6 text-2xl decoration-inherit font-semibold p-6 "
            >
            Người dùng
            </a>
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
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3 hover:bg-gray-300"
                >
                  Tổng quan
                </a>
                <a
                  href="#"
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3 hover:bg-gray-300"
                >
                  Sản phẩm
                </a>
                <a
                  href="#"
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3 hover:bg-gray-300"
                >
                  Danh mục
                </a>
                <a
                  href="#"
                  className="text-gray-900 leading-7 font-semibold text-base py-2 px-3 block decoration-inherit rounded-lg -mx-3 hover:bg-gray-300"
                >
                  Người dùng
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeaderAdmin