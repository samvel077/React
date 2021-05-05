import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import authReduser from "./authReduser";
import bootcampsReduser from "./bootcampsReduser";

const middlewaresArr = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewaresArr.push(logger);
}

const middleWares = applyMiddleware(...middlewaresArr);

const mainReduser = combineReducers({
  bootcampsReduser,
  authReduser,
});

const store = createStore(mainReduser, middleWares);

export default store;
