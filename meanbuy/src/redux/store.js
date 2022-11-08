import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"
import thunk from "redux-thunk"
import { reducer as Appreducer} from "./appreducer/reducer"
import {reducer as Authreducer} from "./authreducer/reducer"
const rootReducer=combineReducers({Appreducer,Authreducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export {store}