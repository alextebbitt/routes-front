import { createAsyncThunk } from "@reduxjs/toolkit";
import commentsService from "./commentsService";

const initialState = {
    comment: "",
    message: "",
};

export const getComments = createAsyncThunk("comments/getComments", async (page = 1, thunkAPI) => {
    try {
        return await commentsService.getComments(page);
    } catch (error) {
        console.log(error)
    }
});

export const createComment = createAsyncThunk("comment/", async (commentData) => {
    try {
        return await commentsService.createPost(commentData);
    } catch (error) {
        console.error(error)
    }
});

export const updateComment = createAsyncThunk("comment/update", async (data, thunkAPI) => {
    try {

        return await commentsService.updatePost(data);
    } catch (error) {

        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }
});

export const deleteComment = createAsyncThunk("comment/deleteComment", async (id, thunkAPI) => {
    try {
        let action = await commentsService.deleteComment(id);
        if (action.comment == null) {
            return thunkAPI.rejectWithValue(action)
        }
        return action
    } catch (error) {
        const message = error.response.data;
        return thunkAPI.rejectWithValue(message);
    }
});

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.routes = action.payload.routes;
            state.pagination = {
                total: action.payload.total,
                page: action.payload.page,
                maxPages: action.payload.maxPages
            }
        })
        .addCase(deleteComment.rejected, (state, action) => {
            state.isError = true
            state.isSuccess = false;
            state.message = action.payload.message;
        })
    }
})