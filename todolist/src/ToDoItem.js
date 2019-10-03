import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
	constructor(props) {
		super(props)
		this.handleItemDelete = this.handleItemDelete.bind(this)
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log("nextProps",nextProps)
		if(nextProps.item!==this.props.item){
			return true;
		}else{
			return false;
		}
	}
	handleItemDelete() {
		const {handleItemDelete,index} = this.props
		handleItemDelete(index);
	}
	render() {
		console.log("child render")
		return ( <
			li onClick = {
				this.handleItemDelete
			}
			dangerouslySetInnerHTML = {
				{
					__html: this.props.item
				}
			} >
			< /li>
		)
	}
}
ToDoItem.propTypes = {
	handleItemDelete:PropTypes.func,
	index:PropTypes.number,
	test:PropTypes.string.isRequired
}
ToDoItem.defaultProps = {
	test:'Hello world'
}
export default ToDoItem
