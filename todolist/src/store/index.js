import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import reducer from './reducer.js';
//中间件
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension鈥檚 options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);		
const store = createStore(
	reducer,
	enhancer
	//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]
	
);

export default store;
