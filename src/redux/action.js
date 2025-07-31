import { actionTypes } from "./actionTypes";

export const setUserDetails = (userFromAndToDetails) => ({
  type: actionTypes.SET_USER_INFO,
  payload: userFromAndToDetails,
});

export const setUserItems = (items) => ({
  type: actionTypes.SET_USER_ITEMS,
  payload: items,
});

export const setUserMoreInfo = (items) => ({
  type: actionTypes.SET_USER_MORE_INFO,
  payload: items,
});

export const setMoversData = (data) => ({
  type: actionTypes.SET_MOVERS_DATA,
  payload: data,
});

export const resetMoversInfo = () => ({
  type: actionTypes.RESET_MOVERS_DATA,
});

export const resetUserInfo = () => ({
  type: actionTypes.RESET_USER_INFO,
});
