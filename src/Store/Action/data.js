import * as actionTypes from "./types";



export const fetchUserSuccess = data => {
  console.log(data)
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    data
  };
};

export const deleteuser = idx => {
  console.log(idx)
  return {
    type: actionTypes.DELETE_USER,
    idx
  };
};


