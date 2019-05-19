import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
//on accede au propriété de combine reducer (donc du store) par la variable getState
export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});