import { combineReducers } from "redux";
import bookReducer from "./book-reducer";



const reducers = combineReducers({
    book: bookReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>