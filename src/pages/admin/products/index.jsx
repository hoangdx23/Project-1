import React, { useState, useEffect } from 'react';
import HeaderAdmin from '../layouts/headerAdmin';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AdminProduct = () => {
  // Khai báo state để lưu trữ dữ liệu từ API
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gọi API và lấy dữ liệu khi component được render
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => {
        // Cập nhật state với dữ liệu từ API
        setProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // [] để đảm bảo useEffect chỉ chạy một lần sau khi component được render

  return (
    <div>
      <HeaderAdmin />
      <div className="relative overflow-x-auto">
        {/* Sử dụng Link để tạo liên kết */}
        <Link to="add-product">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-10">
            Add
          </button>
        </Link>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Origin
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Lặp qua mảng products để render dữ liệu */}
            {products.map(product => (
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.name}
                </th>
                <td className="px-6 py-4">
                  {product.quantity}
                </td>
                <td className="px-6 py-4">
                  {product.description}
                </td>
                <td className="px-6 py-4">
                  {product.origin}
                </td>
                <td className="px-6 py-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-full" />
                </td>
                <td>
                  <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
                  <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProduct;
