import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import {reducer as AppReducer} from "./appreducer/reducer"
import {reducer as AuthReducer} from "./authreducer/reducer"
const rootReducer=combineReducers({AppReducer,AuthReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export { store };
