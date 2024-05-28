import {combineReducers, applyMiddleware, legacy_createStore} from 'redux'
import {thunk} from 'redux-thunk'



const rootReducers = combineReducers({
    
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))