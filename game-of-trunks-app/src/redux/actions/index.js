export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_RECEIVED = 'REQUEST_RECEIVED';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const requestStarted = () => {
  return {type: REQUEST_STARTED};
}


export const requestReceived = (characterData) => {
  return {
    type: REQUEST_RECEIVED,
    payload: characterData
  };
}


export const requestFail = (error) => {
  return {
    type: REQUEST_FAIL,
    payload: error
  };
}

export const fetchCharacter = (name) => {
  return async (dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data = await response.json();
      dispatch(requestReceived(data));
    } catch (error) {
      dispatch(requestFail(error))
    }
  }
}