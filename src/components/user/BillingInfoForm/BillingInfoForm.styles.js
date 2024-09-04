import styled , { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f7f9fc;
    font-family: 'Roboto', sans-serif;
  }
`;

export const FormContainer = styled.div`
  max-width: 550px;
  margin: 60px auto;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  margin-bottom: 25px;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #34495e;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 12px 16px;
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  font-size: 13px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  &::placeholder {
    color: #bdc3c7;
  }
`;

export const Button = styled.button`
  padding: 14px;
  background-color: #3498db;
  width:96%;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
  font-weight: 500;
`;

export const SuccessMessage = styled.p`
  color: #27ae60;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #e8f8f5;
  border-radius: 8px;
`;

