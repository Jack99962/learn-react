import { configureStore } from "@reduxjs/toolkit";
import TableReducer from './reducers/tab'

export default configureStore({
    reducer: {
        tab: TableReducer
    }
})