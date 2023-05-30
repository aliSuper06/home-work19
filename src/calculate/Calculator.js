import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "styled-components";
import { AcitonTypeCalculator } from "../store/calculatorSlice";

export const Calculator = () => {
  const { input } = useSelector((state) => state.calculator);
  const { result } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const handleInputNumber = (value) => {
    dispatch(AcitonTypeCalculator.inputNumber(value));
  };

  const handleCalculate = () => {
    dispatch(AcitonTypeCalculator.calculate());
  };

  const handleReset = () => {
    dispatch(AcitonTypeCalculator.reset());
  };

  return (
    <Container>
      <h2>Calculator</h2>
      <input type="text" value={input} />
      <button onClick={() => handleInputNumber("1")}>1</button>
      <button onClick={() => handleInputNumber("2")}>2</button>
      <button onClick={() => handleInputNumber("3")}>3</button>
      <button onClick={() => handleInputNumber("4")}>4</button>
      <button onClick={() => handleInputNumber("5")}>5</button>
      <button onClick={() => handleInputNumber("6")}>6</button>
      <button onClick={() => handleInputNumber("7")}>7</button>
      <button onClick={() => handleInputNumber("8")}>8</button>
      <button onClick={() => handleInputNumber("9")}>9</button>
      <button onClick={() => handleInputNumber("0")}>0</button>
      <button onClick={() => handleInputNumber("+")}>+</button>
      <button onClick={() => handleInputNumber("*")}>*</button>
      <button onClick={() => handleInputNumber("^")}>^</button>
      <button onClick={handleCalculate}>=</button>
      <button onClick={handleReset}>Reset</button>
      <h2>Result: {result}</h2>
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: 10vh;
`;
