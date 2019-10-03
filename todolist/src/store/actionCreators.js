import {INIT_LIST,CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './actionTypes.js';
import axios from 'axios';

export const getInputType = (value)=>({
	type:CHANGE_INPUT_VALUE,
	value
})

export const addItemType = ()=>({
	type:ADD_TODO_ITEM
})

export const deleteItemType = (index)=>({
	type:DELETE_ITEM,
	index
})

export const initListType = (data)=>({
	type:INIT_LIST,
	data
})

export const getToDoList = () =>{
		//dispatch 接收store
	return (dispatch)=>{
		axios.get('/api/getList')
			.then(function(response) {
				const data = response.data
				const action =  initListType(data);
				dispatch(action);
				console.log("action",action);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
}