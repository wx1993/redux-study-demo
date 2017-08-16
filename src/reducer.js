import * as ActionTypes from './actions'

export const reducer = (state, action) => {
  switch(action.type) {
    case ActionTypes.FETCH_STARTED:
      return { ...state, status: 'loading' }
      break
    case ActionTypes.FETCH_SUCCESS:
      return { ...state, status: 'success', ...action.result }
      break
    case ActionTypes.FETCH_FAILURE:
      break
      return { ...state, status: 'failure' }
    default: 
      return state
  }
}
