import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './authetication/reducer'
import competitionsReducer from './competitions/reducer'
import teamsReducer from './teams/reducer'

const rootReducer = combineReducers({
    'authReducer': authReducer,
    "competitionsReducer": competitionsReducer,
    "teamsReducer": teamsReducer
});


let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}


const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;