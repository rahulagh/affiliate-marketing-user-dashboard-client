import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const sharedStyles = css`
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashboardContainer = styled.div`
  ${sharedStyles}
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f8fafc;
  color: #334155;
  animation: ${fadeIn} 0.5s ease-in;
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

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const SummaryCard = styled.div`
  ${sharedStyles}
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    flex-basis: calc(50% - 8px);
  }

  @media (max-width: 640px) {
    flex-basis: 100%;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: #64748b;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const CardValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 8px 0 0;
  color: #1e293b;
`;

export const ChartContainer = styled.div`
  height: 450px;
  margin-bottom: 100px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ChartTitle = styled.h2`
  color: #1e293b;
  margin-bottom: 24px;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  padding-left: 15px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 20px;
    background-color: #3b82f6;
    border-radius: 2px;
  }
`;

export const ConversionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ConversionItem = styled.li`
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f1f5f9;
    transform: translateX(5px);
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
`;

export const FilterInput = styled.input`
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #334155;
  transition: all 0.2s ease;
  width: 200px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    width: 220px;
  }
`;

export const Button = styled.button`
  ${sharedStyles}
  ${flexCenter}
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 12px 18px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ToggleButton = styled(Button)`
  background-color: ${props => props.active ? '#3b82f6' : '#e2e8f0'};
  color: ${props => props.active ? '#ffffff' : '#64748b'};

  &:hover {
    background-color: ${props => props.active ? '#2563eb' : '#cbd5e1'};
  }
`;