# 目标：React.js工程师

# 项目介绍：
# yarn install
# yarn start 运行

【demo1】
# /老的写法
import ToDoList1 from './ToDoList1';
【demo2】
//加入redux,拆分redux
import ToDoList2 from './ToDoList2';
【demo3】
//拆分UI
import ToDoList3 from './ToDoList3';
【demo4】
//redux-thunk中间件
import ToDoList4 from './ToDoList4';
【demo5】
//react-redux
import store from './todolist5Store';
import ToDoList5 from './ToDoList5';
import {Provider} from 'react-redux';

# 笔记：
# [官方网址](https://reactjs.org/)
# react初探
# 项目搭建：
# 官方脚手架-create-react-app
# 项目1.ToDoList
# Fragment 便签占位符
# dangerouslySetInnerHTML 不转义显示html
# htmlFor label的for标签
# 组件首字母大写
# propTypes  import PropTypes from 'prop-types';
# defaultProps
# 虚拟DOM就是一个js对象，用来描述真实的DOM
# index做key值不稳定
# ref={(ul)=>{this.ul=ul}}
# this.setState({},()=>{}) //setState异步函数
# [charles前端数据模拟](https://www.charlesproxy.com/)
# [axios请求](http://www.axios-js.com/)

# redux
# const store = createStore(reducer);

# react-redux
# Provider store reducer
# connect(_mapStateToProps,_mapDispatchToProps)(ToDoList5)
# 箭头函数 onClick={()=>this.props.deleteItem(index)}
# connect 容器组件  
# ToDoList5UI组件
