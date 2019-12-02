import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // will look for file called index.js in reducers folder

const initialState = {};

const middleware = [thunk];

// Create store 
// createStore(reducer, [preloadedState], [enhancer])
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;