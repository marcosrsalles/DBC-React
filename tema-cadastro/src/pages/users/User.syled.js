import styled from "styled-components";
import { Form, Field } from "formik";

export const Card = styled.div`
  background: #ffffff;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  height: 582px;
  width: 380px;
  border-radius: 8px;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  margin-top: 100px;
`;

export const Title = styled.div`
  font-family: Mulish;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.30000001192092896px;
  text-align: center;
  margin: 32px 32px 12px 32px;
`;

export const FormStyled = styled(Form)`
  margin: 0 auto;
  text-align: center;
`;

export const Input = styled(Field)`
  text-align: left;
  margin-top: 15px;
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

export const Button = styled.button`
  display: flex;
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
  width: 316px;
  cursor: pointer;
  margin: 0 auto;
`;
