import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { ValueReducer } from "./ValueSlice";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage,
};
const rootRedusers = persistReducer(
    persistConfig,
    ValueReducer,
)

export const Store = configureStore({
    reducer: {
        phonebook: rootRedusers,
    }
})

export const persistor = persistStore(Store);
