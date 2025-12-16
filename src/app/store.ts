import { configureStore } from "@reduxjs/toolkit";
import { publicApi, authApi } from "@/api";

const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(publicApi.middleware)
      .concat(authApi.middleware),
});

export default store;
