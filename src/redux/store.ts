import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../pages/RegisterStore/redux/formSlice";

export const store = configureStore({
    reducer: {
        form: formSlice
    }
})

store.subscribe(
    () => console.log(store.getState())
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;