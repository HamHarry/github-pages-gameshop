import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./slices/userSlice";
import addGameReducer from "./slices/addGameSlice";

const reducer = {
  userReducer,
  addGameReducer,
};

export const store = configureStore({
  reducer,
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
