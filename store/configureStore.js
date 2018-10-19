import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../src/reducers';
import TabContainer from '../src/routers';


//redux 的中间件 为了添加异步 logger 等操作
let middleware = [
    thunk,//返回异步方法
]
if(__DEV__) {
    middleware = [
        ...middleware,
        logger,
    ];
};

const navReducer = (state, action) => {
    const newState = TabContainer && TabContainer.router.getStateForAction(action, state);
    return newState || state;
}

const rootReducer = combineReducers({
    ...reducers,
})

const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);
export default store;

// const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
// export default function configureStore(initialState) {
//     const store = createStoreWithMiddleware(rootReducer, initialState)

//     return store;
// }