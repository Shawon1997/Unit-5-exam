

import { legacy_createStore as createStore } from "redux"


import { combineReducers } from 'redux'
import { addCounterReducer } from "./reducer"


export const rootReducer= combineReducers({

  token : loginReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
