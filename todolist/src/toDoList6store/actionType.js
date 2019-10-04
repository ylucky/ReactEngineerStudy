export const CHANGE_INPUT_VALUE ='change_input_value';
export const SUBMIT_INPUT_VALUE ='submit_input_value';
export const DELETE_INPUT_VALUE ='delete_input_value';

export const handleInputChange = (value)=>({
	type:CHANGE_INPUT_VALUE,
	payload:value
})

export const handleClick = ()=>({
	type:SUBMIT_INPUT_VALUE,
})

export const handleDelete = (value)=>({
	type:DELETE_INPUT_VALUE,
	payload:value
})
	