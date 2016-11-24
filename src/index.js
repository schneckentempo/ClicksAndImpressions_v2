import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import rootSaga from './sagas'
import App from './App'
import dimensionMetricsViewerApp from './reducers'

const sagaMiddleware = createSagaMiddleware()

// 2. arg of createStore should be initial State - put here or in reducer?
const store = createStore(
  dimensionMetricsViewerApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)

store.subscribe(() =>
  console.log(store.getState())
)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
