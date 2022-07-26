import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import routesService from "./routesService";

const initialState = {
  routes: [],
  paginationData: {},
  route: {},
  message: "",
  messageType: null,
  pois: [],
  needQuestionnaire: false,
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

export const searchByName = createAsyncThunk(
  "routes/searchByName",
  async (searchData, thunkAPI) => {
    try {
      return await routesService.searchByName(searchData);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getRandomPois = createAsyncThunk(
  "routes/getRandomPois",
  async (thunkAPI) => {
    try {
      return await routesService.getRandomPois();
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getWishlist = createAsyncThunk(
  "routes/getWishlist",
  async (page = 1, thunkAPI) => {
    try {
      return await routesService.getWishlist(page);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPoisNearBy = createAsyncThunk(
  "routes/getPoisNearBy",
  async (mapCenter, thunkAPI) => {
    try {
      return await routesService.getPoisNearBy(mapCenter);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getRecommendation = createAsyncThunk(
  "routes/getRecommendation",
  async (thunkAPI) => {
    try {
      return await routesService.getRecommendation();
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
    resetRoutesMessage: (state) => {
      state.message = "";
      state.messageType = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoutes.fulfilled, (state, action) => {
        state.paginationData = {
          total: action.payload.total,
          page: action.payload.page,
          maxPages: action.payload.maxPages
        }
        if (action.payload.page === 1) {
          state.routes = action.payload.routes;
        } else {
          state.routes = [...state.routes, ...action.payload.routes];
        }
      })
      .addCase(getRoutes.rejected, (state, action) => {
        state.routes = [];
        console.info(action.payload.message); // TODO: Delete this line when error managment is implemented
        state.message = action.payload.message;
      })
      .addCase(getRouteById.fulfilled, (state, action) => {
        state.route = action.payload.route;
        state.route.average = action.payload.average;
        state.route.total = action.payload.total;
      })
      .addCase(getRouteById.rejected, (state, action) => {
        state.route = {};
        if (action.payload.message === "Route not found") {
          state.message = "Ha sido imposible encontrar la ruta";
        } else {
          state.message = action.payload.message;
        }
        state.messageType = "error";
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
        console.info(action.payload.message); // TODO: Delete this line when error managment is implemented
        state.message = action.payload.message;
      })
      .addCase(searchByName.fulfilled, (state, action) => {
        state.routes = action.payload.routes;
        state.paginationData = {
          total: action.payload.routesCount,
          page: 1,
          maxPages: 1
        };
        state.pois = action.payload.pois;
      })
      .addCase(searchByName.rejected, (state, action) => {
        // state.routes = [];
        // state.pois = [];
        console.info(action.payload); // TODO: Delete this line when error managment is implemented
        state.message = action.payload.message;
      })
      .addCase(getRandomPois.fulfilled, (state, action) => {
        state.pois = action.payload.pois;
      })
      .addCase(getRandomPois.rejected, (state, action) => {
        state.pois = [];
        console.info(action.payload); // TODO: Delete this line when error managment is implemented
        state.message = action.payload.message;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.routes = action.payload.routes;
        state.paginationData = {
          total: action.payload.total,
          page: action.payload.page,
          maxPages: action.payload.maxPages
        };
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.routes = [];
        console.info(action.payload); // TODO: Delete this line when error managment is implemented
        state.message = action.payload.message;
      })
      .addCase(getPoisNearBy.fulfilled, (state, action) => {
        state.pois = action.payload.pois;
      })
      .addCase(getPoisNearBy.rejected, (state, action) => {
        state.pois = [];
        console.info(action.payload); // TODO: Delete this line when error managment is implemented
        state.message = action.payload.message;
      })
      .addCase(getRecommendation.fulfilled, (state, action) => {
        state.needQuestionnaire = action.payload.message === "Es necesario rellenar el cuestionario";
        state.route = action.payload.route;
      })
      .addCase(getRecommendation.rejected, (state, action) => {
        state.route = {};
        console.info(action.payload); // TODO: Delete this line when error managment is implemented
        state.message = action.payload.message;
      })
  }
});

export const { resetRoutesMessage } = routesSlice.actions;
export default routesSlice.reducer;