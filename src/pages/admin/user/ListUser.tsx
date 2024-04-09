// Import các thư viện và components cần thiết
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../layouts/headerAdmin';
import { Button, Popconfirm } from 'antd';
// Component User
const User = () => {
    // Khai báo state để lưu trữ dữ liệu từ API
    const [users, setUsers] = useState([]);

    // Sử dụng useEffect để gọi API khi component được render
    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(data => {
                // Cập nhật state với dữ liệu từ API
                setUsers(data);
                console.log(data);

            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    // Render component
    return (
        <div>
            <HeaderAdmin />
            <div className="relative overflow-x-auto">
                <Link to="add-product">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-10">
                        Add
                    </button>
                </Link>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Lặp qua mảng users để render dữ liệu */}
                        {users.map(userData => (
                            <tr key={userData.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {userData.username}
                                </td>
                                <td className="px-6 py-4">
                                    {userData.password}
                                </td>
                                <td>
                                    <Popconfirm
                                        title="Delete the task"
                                        description="Are you sure to delete this task?"
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button danger>Delete</Button>
                                    </Popconfirm>
                                    <Button danger> Update</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User;
