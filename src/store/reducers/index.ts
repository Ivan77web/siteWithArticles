import { combineReducers } from "redux";
import { articlesReducer } from "./articlesReducer";

export const rootReducer = combineReducers({
    allArticles: articlesReducer,
})

export type RootState = ReturnType<typeof rootReducer>