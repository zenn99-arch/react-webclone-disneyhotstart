import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieSlice from "../features/movie/movieSlice";
import userReducer from '../features/user/userSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieSlice,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})