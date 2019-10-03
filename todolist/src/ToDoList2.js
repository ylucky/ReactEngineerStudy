import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store';
import {getInputType,addItemType,deleteItemType} from './store/actionCreators';

//import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './store/actionTypes';	
const data = [
	'hello'
]
class ToDoList2 extends Component{
	constructor(props){
		super(props);
		this.state = store.getState();
		this.handleInputChange=this.handleInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		store.subscribe(this.handleStoreChange)
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
		console.log('changed',store)
		this.setState(store.getState());
	}
	render(){
		return (
		<div style={{marginTop:'10px',marginLeft:'10px'}}>
			<Input 
			value={this.state.inputValue}
			placeholder="hh" 
			style={{width:'300px'}}
			onChange={this.handleInputChange}
			/>
			<Button onClick={this.handleSubmit}>提交</Button>
			<List
			style={{width:'300px'}}
			bordered
			dataSource={this.state.list}
			renderItem={(item,index)=>(
				<List.Item onClick={this.handleDeleteItem.bind(this,index)}>{item}</List.Item>
			)}
			/>
		</div>
		)
	}
}

export default ToDoList2