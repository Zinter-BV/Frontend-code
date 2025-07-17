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
