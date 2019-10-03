const defaultState = {
	inputValue:'hh',
	list: ["hello world","123","456","789"]
}
export default (state=defaultState,action)=>{
	if(action.type==="change_input_value"){
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState
	}
	if(action.type==="submit_value"){
		const newState = JSON.parse(JSON.stringify(state));
		//newState.list.push(action.value)
		newState.list.push(newState.inputValue)
		newState.inputValue = '';
		return newState
	}
	if(action.type==="delete_value"){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1)
		return newState
	}
	return state
}