export const inputNumber = (value) => ({
  type: "INPUT_NUMBER",
  payload: value,
});

export const calculate = () => ({
  type: "CALCULATE",
});

export const reset = () => ({
  type: "RESET",
});
