import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {getToDoList,getInputType,addItemType,deleteItemType} from './store/actionCreators';//,initListType
//import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './store/actionTypes';	
import ToDoListUI from './ToDoListUI'
//import axios from 'axios';

// const data = [
// 	'hello'
// ]
class ToDoList4 extends Component{
	constructor(props){
		super(props);
		this.state = store.getState();
		this.handleInputChange=this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleDeleteItem = this.handleDeleteItem.bind(this)
		
		store.subscribe(this.handleStoreChange)
	}
	
	
	componentDidMount(){
		const action =  getToDoList();
		store.dispatch(action);
		//移除到action
		// let that = this
		// axios.get('/api/getList')
		// 	.then(function(response) {
		// 		const data = response.data
		// 		const action =  initListType(data);
		// 		console.log("action",action);
		// 		store.dispatch(action);
		// 	})
		// 	.catch(function(error) {
		// 		console.log(error);
		// 	});
	}
	handleInputChange(e){
		// const action = {
		// 	type:CHANGE_INPUT_VALUE,
		// 	value:e.target.value
		// }
		const action =  getInputType(e.target.value);
		store.dispatch(action);
	}
	
	handleSubmit(e){
		// const action = {
		// 	type:ADD_TODO_ITEM,
		// }
		const action = addItemType();
		store.dispatch(action);
	}
	
	handleDeleteItem(e,index){
		// const action = {
		// 	type:DELETE_ITEM,
		// 	value:index
		// }
		const action = deleteItemType(index)
		store.dispatch(action);
	}
	
	handleStoreChange(){
		this.setState(store.getState());
	}
	render(){
		return (
			<ToDoListUI
			inputValue={this.state.inputValue}
			list={this.state.list}
			handleInputChange={this.handleInputChange}
			handleSubmit={this.handleSubmit}
			handleDeleteItem={this.handleDeleteItem}
			/>
		)
	}
}

export default ToDoList4