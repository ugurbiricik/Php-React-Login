import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost/Php-React-Login/backend/fetching.php"
      );
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center items-center  text-5xl fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Name</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Email</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-100">
                    {user.email}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm  font-medium text-right whitespace-nowrap flex gap-3">
                  <button type="button" className="text-red-700">
                    Del
                  </button>
                  <button type="button" className="text-blue-700">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
