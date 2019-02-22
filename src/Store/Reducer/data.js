import * as actionTypes from "../Action/types";

let initialState = {
  data: []
};



export const fetchUserSuccess = (state, action) => {
  console.log(`i am reducer succes`);
  return {
    ...state,
    data:[...state.data, action.data]
  };
};
export const deleteuser = (state, action) => {
  console.log(action)
  console.log(`i am reducer elte`);
  let array =state.data;
  array.splice(action.idx,1);
  console.log(array)
  return {
    ...state,
    data:array
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_SUCCESS:
      return fetchUserSuccess(state, action);
      case actionTypes.DELETE_USER:
      return deleteuser(state, action);
    default:
      return state;
  }
};

export default reducer;
