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

