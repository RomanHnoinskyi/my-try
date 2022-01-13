import feedReducers from './feed/feed-reducers';

import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

export default createStore(
    combineReducers({
        feed: feedReducers,
    }),
    applyMiddleware(thunk)
);

