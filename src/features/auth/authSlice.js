import authService from "./authService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  users: [],
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  });

export const login = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  });

export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    try {
      return await authService.logout();
    } catch (error) {
      console.error(error);
    }
  });

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, thunkAPI) => {
    try {
      return await authService.updateUser(userData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "auth/updateAvatar",
  async (data, thunkAPI) => {
    try {
      return await authService.updateAvatar(data);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addToWishlist = createAsyncThunk("routes/addToWishlist",
  async (_id) => {
    try {
      return await authService.addToWishlist(_id);
    } catch (error) {
      console.error(error);
    }
  });

export const removeFromWishlist = createAsyncThunk("routes/removeFromWishlist",
  async (_id) => {
    try {
      return await authService.removeFromWishlist(_id);
    } catch (error) {
      console.error(error);
    }
  });


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
},
  extraReducers: (builder) => {
    builder

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state,action) => {
        state.user = null;
        state.message = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.user = action.payload;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.user = action.payload.user;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.message = action.payload;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.user.avatar = action.payload.user.avatar;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.message = action.payload;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.user.user.wishlist = [...state.user.user.wishlist, action.payload.routeId];
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        const wishlist = state.user.user.wishlist.filter((routeId) =>
          routeId !== action.payload.routeId
        )
        state.user.user.wishlist = wishlist
      })
  },
})

export default authSlice.reducer;