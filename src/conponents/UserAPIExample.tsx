import React, { useEffect, useState } from "react";
import { getUsers } from "../api/getUsers";
import { createUser } from "../api/createUser";
import { updateUser } from "../api/updateUser";
import { deleteUser } from "../api/deleteUser";
import type { CreateUserDto, UpdateUserDto, User } from "../types/user";

const UserAPIExample = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers<User[]>(URL);
        setData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  const handleCreateUser = async () => {
    try {
      const newUser = await createUser<User, CreateUserDto>(URL, {
        name: "New User",
        email: "tgech@gmail.com",
        username: "newuser123",
      });
      setData((prevData) => (prevData ? [...prevData, newUser] : [newUser]));
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleUpdateUser = async (id: number) => {
    try {
      const updatedUser = await updateUser<User, UpdateUserDto>(
        `${URL}/${id}`,
        {
          name: "Name Updated",
        },
        "PUT"
      );

      setData((prevUser) =>
        prevUser
          ? prevUser.map((user) => (user.id === id ? updatedUser : user))
          : null
      );
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(`${URL}/${id}`);
      setData((prevData) => prevData ? prevData.filter(user => user.id !== id) : null);
    } catch (err: any) {
      setError(err.message);
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>User List</h1>
      <button onClick={handleCreateUser}>Create User</button>
      <ul>
        {data &&
          data.map((user) => (
            <li key={user.id}>
              {user.name} - ({user.username}) - {user.email}
              <button onClick={() => handleUpdateUser(user.id)}>
                Update User
              </button>
              <button onClick={() => handleDeleteUser(user.id)}>
                Delete User
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserAPIExample;
