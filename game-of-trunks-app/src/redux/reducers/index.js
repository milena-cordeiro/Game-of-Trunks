import { REQUEST_STARTED, REQUEST_RECEIVED, REQUEST_FAIL } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  characterData: '',
  errorMessage: '',
}

const reducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      
      return {
        ...state,
        isFetching: true,
        characterData: '',
        errorMessage: ''
      };

    case REQUEST_RECEIVED:
      
      return {
        ...state,
        isFetching: false,
        characterData: action.payload,
        errorMessage: ''
      };

      case REQUEST_FAIL:
      
      return {
        ...state,
        isFetching: false,
        characterData: '',
        errorMessage: action.payload,
      };
  
    default:
      return state;
  }
}

export default reducer;