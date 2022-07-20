import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice'
import routes from '../features/routes/routesSlice'
import comments from '../features/comments/commentsSlice'

export const store = configureStore({
  reducer: {
    auth,
    routes,
    comments
  },
});
