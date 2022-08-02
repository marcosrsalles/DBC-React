import styled from "styled-components";

export const Card = styled.div`
  background-color: #d5d5d5d5;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  min-height: 100vh;
  margin: 0 auto;
  color: #706666;
  padding: 50px 77px 1px 128px; ;
`;

export const Li = styled.li`
  list-style-type: none;
  font-size: 30px;
  padding: 5px;
  border: solid 1px black;
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 250px;
  cursor: pointer;
`;
