import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import userReducer from './feature/user/userSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import themeReducer from './feature/theme/themeSlice'

const persistUserConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: persistedUserReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});


export const persistor = persistStore(store);
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;