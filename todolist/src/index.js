import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//老的写法
//import ToDoList1 from './ToDoList1';
//加入redux,拆分redux
//import ToDoList2 from './ToDoList2';
//拆分UI
//import ToDoList3 from './ToDoList3';
//redux-thunk中间件
//import ToDoList4 from './ToDoList4';
//react-redux
import store from './todolist5Store';
import ToDoList5 from './ToDoList5';
import {Provider} from 'react-redux';

import * as serviceWorker from './serviceWorker';

//react-redux
//Provider 连接了store 有能力获取到store的值
const App = (
	<Provider store={store}>
		<ToDoList5/>
	</Provider>
)

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
