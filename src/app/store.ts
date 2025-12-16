import { configureStore } from "@reduxjs/toolkit";
import publicApi from "@/api/publicApi";

const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(publicApi.middleware),
});

export default store;
