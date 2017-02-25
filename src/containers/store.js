/* @flow */
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import reducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store: Store = createStore(reducer, composeWithDevTools(applyMiddleware(promiseMiddleware, createLogger())))

export default store
