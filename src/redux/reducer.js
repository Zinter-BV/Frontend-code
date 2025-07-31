import { actionTypes } from "./actionTypes";

const initialState = {
  userMoveInfo: {},
  items: [],
  moreInfo: {},
  moversData: {},
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
    case actionTypes.SET_MOVERS_DATA:
      return {
        ...state,
        moversData: action.payload,
      };
    case actionTypes.RESET_MOVERS_DATA:
      return {
        ...state,
        moversData: {},
      };
    case actionTypes.RESET_USER_INFO:
      return {
        ...state,
        moreInfo: {},
        userMoveInfo: {},
        items: [],
      };
    default:
      return state;
  }
};

export default UserReducer;
