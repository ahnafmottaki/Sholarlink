import { configureStore } from "@reduxjs/toolkit";
import { publicApi, authApi, agentApi, adminApi } from "@/api";

const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [agentApi.reducerPath]: agentApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(publicApi.middleware)
      .concat(authApi.middleware)
      .concat(agentApi.middleware)
      .concat(adminApi.middleware),
});

export default store;
