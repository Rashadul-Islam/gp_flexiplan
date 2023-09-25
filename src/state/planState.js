import { actionTypes } from "./actionType";
import { eligibilityCheck } from "./checkEiligibility";

export const initialState = {
  longevity: 3,
  voice: 25,
  data: 2560,
  fourg: 0,
  bioscope: 0,
  sms: 0,
  mca: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      if (action.payload.name === "longevity") {
        return eligibilityCheck(state, action.payload.value);
      } else {
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      }
    case actionTypes.TOGGLE:
      return {
        ...state,
        [action.payload.name]: state.mca === 0 ? 1 : 0,
      };
    default:
      return state;
  }
};
