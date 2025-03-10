import styled from "styled-components";

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  border-bottom: 1px solid #050505;
  @media (min-width: 768px) {
    padding: 10px 6px;
  }
`;

export const TextDeleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconBox = styled(TextDeleteBox)`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
    margin-right: 7px;
  }
`;

export const CheckDeleteBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TextDateBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
`;

export const TaskText = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 0;
  word-break: break-all;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const DateTextDue = styled.p`
  font-size: 12px;
  margin: 0;
  display: flex;
  align-items: center;
  ${props =>
    props.due ?
    `
    color: black;
    `:  `
    color: red;
  `}
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
  margin: 0 3px 0 0;
`;

// For DeleteButton
export const DialogContainer = styled.div`
  padding: 0px;
  display: flex;
  flex-directioN: column;
  align-items: center;
`;