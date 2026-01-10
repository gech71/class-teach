export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
export interface CreateUserDto {
  name: string;
  username: string;
  email: string;
}
export interface UpdateUserDto {
  name?: string;
  username?: string;
  email?: string;
}
