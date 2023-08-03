import { createStore, combineReducers } from "redux";
import todos from "../modules/todo";

const rootReducer = combineReducers({ todos });
const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
// 지금은 리듀서 하나라서 상관x
// 리듀서 여러개 되면.. 그냥 한곳에 몰아놓고 rootstate만 쓸 수 있게
