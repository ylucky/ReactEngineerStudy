import * as actionType from './actionType';
const initState = {
	inputValue:'HELLO',
	list:[
		'REACT',
		'REDUX',
		'REACT-REDUX'
	]
}
export default(state=initState,action)=>{
	switch(action.type){
		case actionType.CHANGE_INPUT_VALUE:
		{
			const newState = JSON.parse(JSON.stringify(state)) 
			newState.inputValue = action.payload
			return newState
		}
		case actionType.SUBMIT_INPUT_VALUE:
		{
			const newState = JSON.parse(JSON.stringify(state)) 
			newState.list.push(newState.inputValue)
			return newState
		}
		case actionType.DELETE_INPUT_VALUE:
		{
			const newState = JSON.parse(JSON.stringify(state))
			newState.list.splice(action.payload,1)
			return newState
		}
		default:
		{
		    return state;
		}
	}
}