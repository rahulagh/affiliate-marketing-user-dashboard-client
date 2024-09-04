import styled from 'styled-components';
import { rgba } from 'polished';

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
  min-height: 100vh;
`;

export const Header = styled.h1`
  color: #1e293b;
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background-color: #3b82f6;
    border-radius: 2px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 650px;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 4px 8px rgba(74, 144, 226, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ProductCard = styled.div`
  background-color: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px ${rgba('#000', 0.1)};
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: relative;
  height: 320px;
  width: 250px;
  padding: 20px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ProductImage = styled.img`
  height: 100px;
  width:100px;
  border-radius:10px;
`;

export const ProductInfo = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 10px;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 10px;
`;

export const ProductCommission = styled.p`
  font-weight: bold;
  color: #28a745;
  margin: 0 0 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap:10px;
`;

export const Button = styled.button`
  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 13px;
  opacity: ${props => props.disabled ? 0.5 : 1};

  &:hover {
    background-color: ${props => props.primary ? '#0056b3' : '#5a6268'};
  }
`;

export const LinkContainer = styled.div`
  margin-top: 15px;
  display: flex;
`;

export const LinkInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 0.9rem;
`;

export const CopyButton = styled(Button)`
  border-radius: 0 4px 4px 0;
`;

export const OutOfStock = styled.div`
  background-color: rgba(220, 53, 69, 0.8);
  color: #fff;
  text-align: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: bold;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

export const PopupTitle = styled.h2`
  margin-top: 0;
  color: #333;
`;

export const PopupDescription = styled.p`
  color: #666;
`;

export const PopupCommission = styled.p`
  font-weight: bold;
  color: #28a745;
`;
