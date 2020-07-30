import {combineReducers} from 'redux';
import taskReducers from './taskReducers'

const allReducers = combineReducers({
    taskReducers,
})