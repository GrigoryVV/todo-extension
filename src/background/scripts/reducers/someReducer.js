const initialState = {
    greet: 'Hello World',
};

export default (state = initialState, action) => {
    switch (action.type) {
      case 'MY_ACTION':
        return {
            ...state,
            greet: "Bye World"
        };
        default:
            return state;
    }
}