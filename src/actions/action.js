import {
  createActionStarted,
  createActionSuccessful,
  createActionFailed
} from './index';

/*
export const ActionTypes = {
  FETCH_DATA: 'FETCH_DATA',
};

export const fetchData = () => {
  return async dispatch => {
    try {
      dispatch(createActionStarted(ActionTypes.FETCH_DATA));
      const payload = await fethDataAsync();
      dispatch(createActionSuccessful(ActionTypes.FETCH_DATA, payload));
    } catch (e) {
      dispatch(createActionFailed(ActionTypes.FETCH_DATA, e));
    }
  }
}
*/
