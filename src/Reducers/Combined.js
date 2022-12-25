import { combineReducers } from 'redux';
import TaskReducers from './TaskReducers';

const singleReducer = combineReducers({
    TASKSTATE : TaskReducers
});

export default singleReducer;