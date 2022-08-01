import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin-top: 30px;
  form {
    display: flex;
    flex-direction: column;

    input {
      width: 417px;
      height: 52px;
      margin: 10px;
    }

    button {
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
      margin: 0 auto;
    }
  }
`;
