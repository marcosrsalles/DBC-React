import styled from "styled-components";
import { MenuButton } from "@szhsin/react-menu";

export const Backgroud = styled.div`
  background: #e5e5e5;
  height: 100vh;
`;

export const Card = styled.div`
  height: 100vh;
  width: 1122px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 15px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  margin-left: 30px;
  background: #ffffff;

  border: 1px solid #dfe0eb;
  border-radius: 8px;
  h1 {
    margin: 42px 0 48px 32px;
    height: 24px;

    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 24px;

    letter-spacing: 0.4px;

    color: #252733;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 30px;
  border-top: 1.5px solid #dfe0eb;

  border-bottom: 1.5px solid #dfe0eb;

  padding: 18px 0;
  :hover {
    background: #3751ff17;
    cursor: pointer;
  }
  p {
    width: 300px;
  }
`;

export const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 30px;

  padding: 18px 0;
  p {
    width: 300px;

    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: 0.2px;

    color: #9fa2b4;
  }
`;

export const Button = styled.div`
  font-size: 25px;
  transform: rotate(-90deg);
  &:hover {
    cursor: pointer;
  }
`;
