import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import routesService from "./routesService";

const initialState = {
  routes: [],
  paginationData: {},
  route: {},
  message: "",
};

export const getRoutes = createAsyncThunk(
  "routes/getRoutes",
  async (page = 1, thunkAPI) => {
    try {
      return await routesService.getRoutes(page);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getRouteById = createAsyncThunk(
  "routes/getRouteById",
  async (id, thunkAPI) => {
    try {
      return await routesService.getRouteById(id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getRoutesByTag = createAsyncThunk(
  "routes/getRoutesByTag",
  async (routesData, thunkAPI) => {
    try {
      return await routesService.getRoutesByTag({ ...routesData });
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoutes.fulfilled, (state, action) => {
        state.routes = action.payload.routes;
        state.paginationData = {
          total: action.payload.total,
          page: action.payload.page,
          maxPages: action.payload.maxPages
        }
      })
      .addCase(getRoutes.rejected, (state, action) => {
        state.routes = [];
        console.info(action.payload.error); // TODO: Delete this line when error managment is implemented
        state.message = action.payload.message;
      })
      .addCase(getRouteById.fulfilled, (state, action) => {
        state.route = action.payload.route;
      })
      .addCase(getRouteById.rejected, (state, action) => {
        state.route = {};
        console.info(action.payload.error); // TODO: Delete this line when error managment is implemented
        state.message = action.payload.message;
      })
      .addCase(getRoutesByTag.fulfilled, (state, action) => {
        state.routes = action.payload.routes;
        state.paginationData = {
          total: action.payload.total,
          page: action.payload.page,
          maxPages: action.payload.maxPages
        };
      })
      .addCase(getRoutesByTag.rejected, (state, action) => {
        state.routes = [];
        console.info(action.payload.error); // TODO: Delete this line when error managment is implemented
        state.message = action.payload.message;
      })
  }
});

export default routesSlice.reducer;