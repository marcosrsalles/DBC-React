import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
  background: #363740;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
`;

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

export const TitleH3 = styled.h3`
  height: 24px;

  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 0.4px;

  color: #a4a6b3;

  opacity: 0.7;
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

export const Small = styled.small`
  height: 20px;

  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 0.3px;

  color: #9fa2b4;
`;

export const Label = styled.label`
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  height: 16px;

  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  text-transform: uppercase;

  color: #9fa2b4;
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
  width: 316px;
  cursor: pointer;
`;

export const SignUp = styled.div`
  margin: 0 auto;
  width: 224px;
`;

export const TitleSignUp = styled.span`
  margin-right: 5px;
`;
export const ItemLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: Mulish;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  color: #3751ff;
`;

// estilos dos erros

export const Erros = styled.div`
  color: red;
`;
