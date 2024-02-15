export const useState = initState => {
	let state = initState
	return [
		() => state,
		newState => {
			state = newState
		},
	]
}



