import { createSlice } from "@reduxjs/toolkit";
import { UserWithoutPasswordType } from ".";
import { refreshAccessToken, registration, authorization, logout } from "./userThunk";

// Определяем тип состояния для хранилища пользователя
type UserState = {
  user: UserWithoutPasswordType | null;
  error: string | null;
  loading: boolean;
};

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

// Создаем слайс для управления состоянием пользователя
const userSlice = createSlice({
  name: "user", // Имя слайса для генерации типов действий
  initialState, // Начальное состояние
  reducers: {}, // Здесь можно определить синхронные редьюсеры
  extraReducers: (builder) => {
    // Добавляем обработчики для асинхронных действий
    builder
      // Обработка обновления токена доступа
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true; // Устанавливаем состояние загрузки в true
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false; // Устанавливаем состояние загрузки в false
        state.user = action.payload.user; // Обновляем пользователя
        state.error = null; // Очищаем ошибку
      })
      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false; // Устанавливаем состояние загрузки в false
        // Здесь можно добавить дополнительную логику обработки ошибки
      })

      // Аналогичные обработчики для авторизации, регистрации и выхода
      .addCase(authorization.pending, (state) => {
        state.loading = true;
      })
      .addCase(authorization.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(authorization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Authorization fail";
      })

      .addCase(registration.pending, (state) => {
        state.loading = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(registration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Registration fail";
      })

      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Logout fail";
      });
  },
});

// Экспортируем редьюсер для использования в store
export default userSlice.reducer;
