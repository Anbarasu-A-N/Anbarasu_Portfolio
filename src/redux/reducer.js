
// reducers.js
const initialState = {
    verificationSuccess: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VERIFICATION_SUCCESS':
        return {
          ...state,
          verificationSuccess: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  