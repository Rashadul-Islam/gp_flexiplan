export const eligibilityCheck = (state, value) => {
  switch (value) {
    case 1:
      return {
        ...state,
        longevity: 1,
        data: 0,
        fourg: 0,
        bioscope: 0,
        sms: 0,
      };

    case 3:
      return {
        ...state,
        longevity: 3,
        data: state.data >= 2560 ? 2560 : state.data,
        fourg: 0,
        bioscope: 0,
      };
    case 7:
      return {
        ...state,
        longevity: 7,
        data: state.data >= 25600 ? 25600 : state.data,
        fourg: state.fourg >= 76800 ? 76800 : 0,
        bioscope: state.bioscope >= 5120 ? 5120 : 0,
        sms: 0,
      };
    case 15:
      return {
        ...state,
        longevity: 15,
      };
    case 30:
      return {
        ...state,
        longevity: 30,
      };
    default:
      return state;
  }
};
