import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    user: {
      _id: "",
      email: "",
      role: "",
      exp: "",
      iat: "",
    },
  };

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})