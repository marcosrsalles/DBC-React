import styled from "styled-components";
import { Form } from "formik";

export const Backgroud = styled.div`
  width: 1500px;
  background: #d5d5d5d5;
  margin: 0 auto;
  overflow-x: hidden;
  display: flex;
`;

export const Card = styled.div`
  background-color: #d5d5d5d5;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  color: #706666;
  padding: 50px 77px 1px 128px;
  align-items: center;
  justify-content: center;
  align-content: center;
  overflow-x: hidden;
`;

export const FormStyled = styled(Form)`
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  text-align: left;

  background: #fcfdfe;
  width: 316px;
  height: 42px;
  border: 1px solid #f0f1f7;
  border-radius: 8px;
  margin-bottom: 12px;
  ::placeholder {
    padding-left: 16px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    letter-spacing: 0.3px;

    color: #4b506d;

    opacity: 0.4;
  }
`;

export const CardButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
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
  width: 150px;
  cursor: pointer;
`;
