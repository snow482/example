export type UserType = {
  id: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};
export type UserWithoutIdType = Omit<UserType, "id">;
export type UserWithoutPasswordType = Omit<UserType, "password">;
export type UserIdType = UserType["id"];
