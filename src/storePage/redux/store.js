import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import * as reducers from "./ducks"

const composeEnhancers = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE || compose;


const rootReducer = combineReducers(reducers)
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer,'loading', enhancer)
export default store
