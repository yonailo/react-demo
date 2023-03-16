import { createStore } from "redux";
import postsReducer from "./Store/Reducer/postsReducer";

export const store = createStore(postsReducer);
