// @flow
/**
 * @class       : meeting
 * @author      : vikash (vikash.ckiiita30@gmail.com)
 * @created     : Saturday Jan 19, 2019 13:34:18 IST
 * @description : meeting
 */

import type { ActionStatus } from '../actions';

const defaultState = {
  data: null,
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    /*
    case 'DATA_FETCHED':
      if (action.status === ActionStatus.SUCCESSFUL) {
        return {
          ...state,
          data: action.payload
        };
      } else if (action.status === ActionStatus.FAILED) {
        return {
          ...state,
          error: action.payload
        };
      }
      break;
      */
    default:
      return state;
  }

  return state;
};

export default reducer;
