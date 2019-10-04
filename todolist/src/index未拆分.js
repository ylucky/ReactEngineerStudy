import React from 'react'
import ReactDOM from 'react-dom'
// 引入redux 不结合react
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'

// 引入axios请求数据
import {get} from 'axios'

// 请求中间件redux-thunk
import thunk from 'redux-thunk'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// 设置初始值
let init = {
  count: 1
}
// redux 中的三个重要部分:action reduxer state(store)

// 创建reducer

const counterReducer = function (state = init, action) {
  switch (action.type) {
    case 'COUNT_ADD':
      return {
        ...state,
        count: state.count + 1
      }
    case 'COUNT_REDUCE':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

let list = {
  list: [
		{title: '你好'}
  ]
}
const postReducer = function (state = list, action) {
  switch (action.type) {
    case 'LOAD_POSTES':
      return {
        ...state,
        list: action.payload
      }
    default :
		    return state
  }
}

// 通过combinReducers把多个reducer合并

const rootReducers = combineReducers({
  count: counterReducer,
  post: postReducer
})

// react-develop-tool
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ();
// 把reducer传入store
// const store = createStore(rootReducers) //原始用法
// const store = createStore(rootReducers,composeEnhancers) //添加了react-develop-tool
const store = createStore(
rootReducers,
compose(
	applyMiddleware(...[thunk])// 需要使用的中间件
	// composeEnhancers
)
) // 添加了中间件
console.log(store)
/* store 打印结果
dispatch: ƒ dispatch(action)
getState: ƒ getState()
replaceReducer: ƒ replaceReducer(nextReducer)
subscribe: ƒ subscribe(listener)
Symbol(observable): ƒ observable()
*/
console.log(store.getState())
// 如果要改变一个reducer的值，需要使用dispatch派发一个action
// action需要两个参数
// type 通过type区分区分是对state做什么操作
// payload 传递的数据

// 修改状态+1
store.dispatch({
  type: 'COUNT_ADD',
  payload: {}
})
console.log(store.getState())
// 修改状态-1
store.dispatch({
  type: 'COUNT_REDUCE',
  payload: {}
})
console.log(store.getState())

const getPostsRequest = () => {
  return get('http://jsonplaceholder.typicode.com/posts')
}

store.dispatch(async function(dispatch){
	const res = await getPostsRequest()
	console.log(res.data)
	dispatch({
		type:'LOAD_POSTES',
		payload:res.data
	})
})

console.log('getPostsRequest', getPostsRequest)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
