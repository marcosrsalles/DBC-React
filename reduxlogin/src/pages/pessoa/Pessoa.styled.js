import styled from "styled-components";

export const Card = styled.div`
  padding: 30px;
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
  margin: 0 auto;
  h1 {
    padding: 40px 0;
    margin: 0 auto;
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

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 30px;
  border-top: 1.5px solid #dfe0eb;

  border-bottom: 1.5px solid #dfe0eb;

  padding: 18px 5px;
  :hover {
    background: #3751ff17;
    cursor: pointer;
  }
  p {
    width: 300px;
    padding: 18px 5px;
  }
`;

export const Button = styled.div`
  font-size: 25px;
  transform: rotate(-90deg);
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonCadastro = styled.button`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 32px;
  justify-content: center;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  background: #3751ff;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  height: 48px;
  width: 116px;
  cursor: pointer;
  margin: 0 auto;
`;
