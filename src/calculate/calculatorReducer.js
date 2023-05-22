const initialState = {
  input: "",
  result: 0,
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_NUMBER":
      return {
        ...state,
        input: state.input + action.payload,
      };
    case "ADD":
      return {
        ...state,
        result: state.result + parseFloat(state.input),
        input: "",
      };
    case "MULTIPLY":
      return {
        ...state,
        result: state.result * parseFloat(state.input),
        input: "",
      };
    case "CALCULATE":
      return {
        ...state,
        result: eval(state.input),
        input: "",
      };
    case "RESET":
      return {
        ...state,
        input: "",
        result: 0,
      };
    default:
      return state;
  }
};
