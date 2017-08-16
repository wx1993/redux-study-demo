import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { reducer } from './reducer'

const initialState = {}

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware, thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer, initialState)

// const store = createStore(reducer, initialState)

// console.log(store.getState())

const subscribe = store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
