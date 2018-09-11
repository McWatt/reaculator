import styled from "styled-components";

const CalculatorContainer = styled.div`
  font-size: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 10vw);
  grid-template-rows: repeat(6, 10vw);
  justify-content: center;

  > button:last-of-type {
    grid-column: 1 / -1;
  }
`;

export default CalculatorContainer;
