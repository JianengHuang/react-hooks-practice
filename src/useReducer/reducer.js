const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1, text: action.payload };
    case 'SUBRACT':
      return { count: state.count - 1, text: action.payload };
    default:
      console.log('type not found');
  }
};
export default reducer;
