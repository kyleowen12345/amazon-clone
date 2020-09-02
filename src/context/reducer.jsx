export const initialState = {
	user: null,
};
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};

export default reducer;
