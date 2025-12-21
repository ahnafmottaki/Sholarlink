import { configureStore } from "@reduxjs/toolkit";
import { publicApi, authApi, agentApi } from "@/api";

const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [agentApi.reducerPath]: agentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(publicApi.middleware)
      .concat(authApi.middleware)
      .concat(agentApi.middleware),
});

export default store;
