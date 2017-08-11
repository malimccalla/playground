const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_GUIDE':
      return action.payload;
    default:
      return state;
  }
};
