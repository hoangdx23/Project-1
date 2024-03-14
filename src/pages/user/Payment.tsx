import React from "react";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";

const Payment = () => {
  return (
    <div>
      <Header></Header>
      <div className="payment lg:grid lg:grid-cols-4 lg:gap-5 m-auto mt-2">
        <div className="col-span-1">
          <div className="text-2xl font-bold">Billing Details</div>
          <hr />
          <div className="mt-5">
            <div className="font-semibold my-1">Email</div>
            <input type="email" className="border border-gray-600 p-2 rounded w-full my-2 focus:outline-blue-400"/>
            <div className="font-semibold my-1">Full Name</div>
            <input type="text" className="border border-gray-600 p-2 rounded w-full my-2 focus:outline-blue-400"/>
            <div className="font-semibold my-1">Phone</div>
            <input type="text" className="border border-gray-600 p-2 rounded w-full my-2 focus:outline-blue-400"/>
            <div className="font-semibold my-1">Address</div>
            <textarea className="border border-gray-600 p-1 rounded w-full my-2 focus:outline-blue-400" id="" rows={2}></textarea>
          </div>
        </div>
        <div className="col-span-3 bg-green-50 p-10">
          <div className="text-2xl font-bold">Your Order</div>
          <hr />
          <table className="table-auto m-1 w-full">
            <thead>
              <tr>
                <th>Products Name</th>
                <th>Image</th>
                <th>Type</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Mare of Animals</td>
                <td className="w-20">
                  <img src="https://res.cloudinary.com/dwxumu69m/image/upload/v1697345237/POP%20MART/uyfdmwa5ztjqsg3ppd8n.jpg" alt="" className="w-40"/>
                </td>
                <td>Single Box</td>
                <td>Skullpanda</td>
                <td>3</td>
                <td>$35.7</td>
              </tr>
            </tbody>
              <tr className="border border-x-green-50 border-b-green-50">
                <th>Tổng thanh toán</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <th>$35.7</th>
              </tr>
          </table>
          <div className="bg-white p-4">
            <div>---Chọn phương thức thanh toán---</div>
            <div className="border border-gray-300 rounded p-3 text-xl font-medium my-2">
              <input type="radio" className="mr-5"/>
              Thanh toán khi nhận hàng
            </div>
            <div className="border border-gray-300 rounded p-3 text-xl font-medium my-2">
              <input type="radio" className="mr-5"/>
              Thanh toán online
            </div>
          </div>
          <div className="mt-2">
            Việc đặt hàng của bạn đồng thời chấp nhận 
            <a href="#" className="text-red-400 hover:text-red-500"> điều khoản và dịch vụ* </a>của chúng tôi.
          </div>
          <button className="border px-8 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white hover:text-gray-200 my-2">Đặt hàng</button>
          <div>
            <div className="font-semibold mt-2">Ghi chú</div>
            <textarea className="border border-gray-600 p-3 rounded w-full my-2 focus:outline-blue-400" id="" cols={20} rows={10}></textarea>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Payment;
