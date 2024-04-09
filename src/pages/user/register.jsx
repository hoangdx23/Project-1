import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/layouts/footer';
import Header from '../../components/layouts/header';
import useMessage from '../message/message';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const { contextHolder, success,warning, error } = useMessage(); // Sử dụng custom hook useMessage
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const users = await response.json();
      if (users) {
        // Hiển thị thông báo thành công khi đăng ký
        success('Đăng kí thành công');
        setTimeout(()=>{
          navigate('/login');
        },2000)
        console.log('thanh cong');
      } else {
        warning('Tên người dùng hoặc mật khẩu không chính xác.');
      }
    } catch (error) {
      console.error('Lỗi khi đăng ký:', error);
      error('Đã xảy ra lỗi khi đăng ký.');
    }
  };

  return (
    <div>
      <Header />
      {contextHolder} {/* Hiển thị contextHolder ở đây */}
      <form className="max-w-sm mx-auto m-20" onSubmit={handleSubmit}>
        <h1 className="text-center">Register</h1>
        {error && <div className="text-red-500 mb-5">{error}</div>}
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Register;
