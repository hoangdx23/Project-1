import "../../features/css/cart.css";
import Banner from "../../components/layouts/banner";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";

const Cart = () => {
  return (
    <div>
      <Header />
      <div className="cart relative overflow-x-auto px-4 pt-2 m-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </td>
              <td className="px-6 py-4">
                <img src="https://res.cloudinary.com/dwxumu69m/image/upload/v1697345237/POP%20MART/uyfdmwa5ztjqsg3ppd8n.jpg" alt="" className="w-40"/>
              </td>
              <td className="px-6 py-4">Single Box</td>
              <td className="px-6 py-4">Skullpanda</td>
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">$11.90</td>
              <td className="text-center">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-2"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </td>
              <td className="px-6 py-4">
                <img src="https://res.cloudinary.com/dwxumu69m/image/upload/v1697345237/POP%20MART/uyfdmwa5ztjqsg3ppd8n.jpg" alt="" className="w-40"/>
              </td>
              <td className="px-6 py-4">Whole Set</td>
              <td className="px-6 py-4">Skullpanda</td>
              <td className="px-6 py-4">6</td>
              <td className="px-6 py-4">$142.80</td>
              <td className="text-center">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-2"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </td>
              <td className="px-6 py-4">
                <img src="https://res.cloudinary.com/dwxumu69m/image/upload/v1697345237/POP%20MART/uyfdmwa5ztjqsg3ppd8n.jpg" alt="" className="w-40"/>
              </td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Skullpanda</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">$2999</td>
              <td className="text-center">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-2"
                >
                  Delete
                </button>
              </td>
            </tr>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-3"
            >
              <a href="/payment">Total</a>
            </button>
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
