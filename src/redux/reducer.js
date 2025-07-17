import { actionTypes } from "./actionTypes";

const initialState = {
  userMoveInfo: {},
  items: [],
  moreInfo: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_INFO:
      return {
        ...state,
        userMoveInfo: action.payload,
      };
    case actionTypes.SET_USER_ITEMS:
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };
    case actionTypes.SET_USER_MORE_INFO:
      return {
        ...state,
        moreInfo: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
