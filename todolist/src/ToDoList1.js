import React, {
	Fragment
} from 'react';
import './index.css';
import ToDoItem from './ToDoItem';
import axios from 'axios';
//ToDoList
//Fragment 便签占位符
class ToDoList1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		let that = this
		axios.get('/api/getList')
			.then(function(response) {
				console.log(response);
				that.setState(()=>({
					list:response.data
				})
				)
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	handleChange = (e) => {
		const value = e.target.value
		this.setState(() => ({
			inputValue: value
		}))
	}
	//新增
	handleClick = () => {
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))
		// this.setState({
		//  //展开运算符
		//  list:[...this.state.list,this.state.inputValue],
		//  inputValue:''
		// })
	}
	//删除
	handleItemDelete = (index) => {
		console.log("index", index)
		//immutable state不允许我们做任何的改变！
		this.setState((prevState) => {
			const list = [...prevState.list]
			list.splice(index, 1)
			return {
				list
			}
		})

		// const list =[...this.state.list] //展开运算符 拷贝一份代码
		// list.splice(index,1)
		// this.setState({
		//  list:list
		// })
	}
	//getItem
	getItem() {
		return this.state.list.map((item, index) => {
			return ( <
				div key = {
					index
				} >
				<
				ToDoItem item = {
					item
				}
				index = {
					index
				}
				handleItemDelete = {
					this.handleItemDelete
				}
				/> < /
				div >
			)
		})
	}
	render() {
		// const lists = 
		// 	list.map((item,index)=>
		// 	<ToDoItem
		// 	key={index}
		// 	item={item}
		// 	index={index}
		// 	handleItemDelete={this.handleItemDelete}
		// 	/>
		// )
		return ( <
			Fragment >
			<
			div >
			<
			label htmlFor = "inset" > 输入内容 < /label> <
			input id = "inset"
			className = "border"
			name = "inputValue"
			value = {
				this.state.inputValue
			}
			onChange = {
				this.handleChange
			}
			/> <
			button onClick = {
				this.handleClick
			} > 提交 < /button>  < /
			div > <
			ul > {
				this.getItem()
			} < /ul> < /
			Fragment >
		);
	}
}

export default ToDoList1;
