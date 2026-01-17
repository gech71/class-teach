import { useEffect, useState } from "react";
import type { User, CreateUserDto, UpdateUserDto } from "../types/user";
import { getUsers } from "../api/getUsers";
import { createUser } from "../api/createUser";
import { updateUser } from "../api/updateUser";
import { deleteUser } from "../api/deleteUser";

const UserAPIExample = () => {
  const URL: string = "https://jsonplaceholder.typicode.com/users";
  const [loading, setLoading] = useState(true);
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
      const updatedUser = await updateUser<User, UpdateUserDto>(
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
      await deleteUser(`https://jsonplaceholder.typicode.com/users/${id}`);

      // Remove user from UI state
      setData((prev) => prev?.filter((user) => user.id !== id) || null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading)
    return (
      <>
        <h2>Loading...</h2>
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
