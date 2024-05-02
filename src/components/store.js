import { createStore } from 'redux';
import rootReducer from './reducers'; // Import your root reducer (if you have one)

const store = createStore(rootReducer); // Create your Redux store with the root reducer

export default store; // Export the store so it can be used elsewhere in your app
