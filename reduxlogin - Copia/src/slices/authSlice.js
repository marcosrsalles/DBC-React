import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authService from "../services/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  error: false,
  sucess: false,
  loading: false,
};

// register user and sign in

export const register = createAsyncThunk(
  "/auth/create",
  async (user, thunkAPI) => {
    const data = await authService.register(user);
    // checar errro
    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    return data;
  }
);

export const loginUser = createAsyncThunk("/auth", async (user, thunkAPI) => {
  const data = await authService.loginUser(user);
  // checar errro
  if (data.error) {
    return thunkAPI.rejectWithValue(data.error);
  }

  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = false;
      state.sucess = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.sucess = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.sucess = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.sucess = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.sucess = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
