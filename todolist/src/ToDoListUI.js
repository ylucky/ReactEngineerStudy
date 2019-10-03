// import React, {
// 	Component
// } from 'react';
import React from 'react';
import {
	Input,
	Button,
	List
} from 'antd';

// class ToDoListUI extends Component {
// 	render(){
// 		return (
// 		<div style={{marginTop:'10px',marginLeft:'10px'}}>
// 			<Input 
// 			value={this.props.inputValue}
// 			placeholder="hh" 
// 			style={{width:'300px'}}
// 			onChange={this.props.handleInputChange}
// 			/>
// 			<Button onClick={this.props.handleSubmit}>提交</Button>
// 			<List
// 			style={{width:'300px'}}
// 			bordered
// 			dataSource={this.props.list}
// 			renderItem={(item,index)=>(
// 				<List.Item onClick={(index)=>{this.props.handleDeleteItem(index)}}>{item}</List.Item>
// 			)}
// 			/>
// 		</div>
// 		)
// 	}
// }


//无状态组件 只有render函数的时候
const ToDoListUI = (props) => {
	return ( <
		div style = {
			{
				marginTop: '10px',
				marginLeft: '10px'
			}
		} >
		<
		Input value = {
			props.inputValue
		}
		placeholder = "hh"
		style = {
			{
				width: '300px'
			}
		}
		onChange = {
			props.handleInputChange
		}
		/> <
		Button onClick = {
			props.handleSubmit
		} > 提交 < /Button> <
		List style = {
			{
				width: '300px'
			}
		}
		bordered dataSource = {
			props.list
		}
		renderItem = {
			(item, index) => ( <
				List.Item onClick = {
					() => {
						props.handleDeleteItem(index)
					}
				} > {
					item
				} < /List.Item>
			)
		}
		/> <
		/div>
	)
}
export default ToDoListUI
