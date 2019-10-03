import React, { Component } from 'react';
import {connect} from 'react-redux';


// class ToDoList5 extends Component  {
// 	constructor(props){
// 		super(props)
// 		//this.state = store.getState()
// 		//this.handleChange =this.handleChange.bind(this)
// 		//this.handleClick = this.handleClick.bind(this);
// 	}
// 	render(){
// 		const {inputValue,list,handleChange,handleClick,deleteItem} = this.props
// 		return (
// 			<div>
// 				<input type="text" value={inputValue} onChange={handleChange}/>
// 				<button onClick={handleClick}>提交</button>
// 				<ul>
// 					{
// 						list.map(
// 						(item,index)=> {
// 					return <li 
// 						key={index}
// 						onClick={()=>deleteItem(index)}
// 						>
						
// 						{item}
// 					</li>
// 							})
// 					}
// 				</ul>			
// 			</div>
// 		)
// 	}
// }
//无状态组件 可以接受一个参数props UI组件
const ToDoList5 = (props) => {
	const {inputValue,list,handleChange,handleClick,deleteItem} = props
	return (
		<div>
			<input type="text" value={inputValue} onChange={handleChange}/>
			<button onClick={handleClick}>提交</button>
			<ul>
				{
					list.map(
					(item,index)=> {
				return <li 
					key={index}
					onClick={()=>deleteItem(index)}
					>
					
					{item}
				</li>
						})
				}
			</ul>			
		</div>
	)
}

//state 就是store里面的数据
const _mapStateToProps = (state) => {
	return {
		inputValue:state.inputValue,
		list:state.list
	}
}
//发布 store.dispatch props
const _mapDispatchToProps = (dispatch)=>{
	return {
		handleChange(e){
			const action = {
				type:'change_input_value',
				value:e.target.value
			}
			dispatch(action);
		},
		handleClick(){
			const action = {
				type:'submit_value'
			}
			dispatch(action);
		},
		deleteItem(index){
			const action = {
				type:'delete_value',
				index:index
			}
			dispatch(action);
		}
	}
}
//connect 容器组件
export default connect(_mapStateToProps,_mapDispatchToProps)(ToDoList5)