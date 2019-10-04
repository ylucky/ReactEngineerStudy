import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import * as actionType from './toDoList6store/actionType';

class ToDoList6 extends Component {
	render() {
		const {
			inputValue,
			list,
			handleInputChange,
			handleClick,
			handleDelete
		} = this.props;
		return <div >
			<
			input
		value = {
			inputValue
		}
		onChange = {
			handleInputChange
		}
		/> <button onClick = {
				handleClick
			} > 提交 < /button> <
			ul > {
				list.map((item, index) => ( <
					li key = {
						index
					}
					onClick = {
						() => handleDelete(index)
					} >
					{
						item
					} < /li>
				))
			} <
			/ul> <
			/div>
	}
}
const _mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}
const _mapDispatchToProps = (dispatch) => {
	return {
		handleInputChange: (e) => dispatch(actionType.handleInputChange(e.target.value)),
		handleClick: () => dispatch(actionType.handleClick()),
		handleDelete: (index) => dispatch(actionType.handleDelete(index)),
	}
}
export default connect(_mapStateToProps, _mapDispatchToProps)(ToDoList6)
