import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import { UserWithoutPasswordType } from "../model";

enum API_ROUTES {
  REG_PATH = "/auth/registration",
  AUTH_PATH = "/auth/authorization",
  LOGOUT_PATH = "/auth/logout",
  REFRESH_PATH = "/auth/refresh",
}

export class UserService {
  static async registration(
    email: string,
    password: string
  ): Promise<{ accessToken: string; user: UserWithoutPasswordType }> {
    const response = await axiosInstance.post(API_ROUTES.REG_PATH, {
      email,
      password,
    });

    setAccessToken(response.data.accessToken);
    return response.data;
  }

  static async authorization(
    email: string,
    password: string
  ): Promise<{ accessToken: string; user: UserWithoutPasswordType }> {
    const response = await axiosInstance.post(API_ROUTES.AUTH_PATH, {
      email,
      password,
    });

    setAccessToken(response.data.accessToken);
    return response.data;
  }

  static async logout(): Promise<void> {
    try {
      await axiosInstance.delete(API_ROUTES.LOGOUT_PATH);
      setAccessToken("");
    } catch (error) {
      console.log(error);
    }
  }

  static async refreshAccessToken(): Promise<{
    accessToken: string;
    user: UserWithoutPasswordType;
  }> {
    const response = await axiosInstance.get(API_ROUTES.REFRESH_PATH);
    setAccessToken(response.data.accessToken);
    return response.data;
  }
}
