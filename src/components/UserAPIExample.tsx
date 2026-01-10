import { useEffect, useState } from "react";
import type { User, CreateUserDto, UpdateUserDto } from "../types/user";
import { getUsers, getUsersAxios } from "../api/getUsers";
import { createUser, createUserAxios } from "../api/createUser";
import { updateUser, updateUserAxios } from "../api/updateUser";
import { deleteUser, deleteUserAxios } from "../api/deleteUser";
import Loading from "./Loading";
import UserProfileSkeleton from "./UserProfileSkeleton";

const UserAPIExample = () => {
  const URL: string = "https://jsonplaceholder.typicode.com/users";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const controller: AbortController = new AbortController();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsersAxios<User[]>(URL, controller);
        setData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();

    return () => controller.abort();
  }, []);

  const handleCreateUser = async () => {
    try {
      const newUser = await createUserAxios<User, CreateUserDto>(URL, {
        name: "John Doe",
        username: "Jhon",
        email: "john@test.com",
      });
      // Optimistically update UI
      setData((prev) => (prev ? [...prev, newUser] : [newUser]));
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleUpdateUser = async (id: number) => {
    try {
      const updatedUser = await updateUserAxios<User, UpdateUserDto>(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          name: "Updated Name",
        }
      );
      // Update UI state
      setData((prev) =>
        prev ? prev.map((user) => (user.id === id ? updatedUser : user)) : prev
      );
    } catch (err: any) {
      setError(err.message);
    }
  };
  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUserAxios(`https://jsonplaceholder.typicode.com/users/${id}`);

      // Remove user from UI state
      setData((prev) => prev?.filter((user) => user.id !== id) || null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading)
    return (
      <>
        <UserProfileSkeleton />
        <button onClick={() => controller.abort()}>Cancel Request</button>
      </>
    );
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>User Profile</h1>
      <button onClick={handleCreateUser}>Create User</button>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleUpdateUser(user.id)}>Update</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAPIExample;
