import styled from 'styled-components';

export const HeroSection = styled.section`
  background: linear-gradient(to right, #1a237e, #4a148c);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius:15px;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const JoinButton = styled.button`
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }
`;

export const StepsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
`;

export const StepsTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: #333;
`;

export const StepsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const StepItem = styled.div`
  flex: 1;
  width: 200px;
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StepIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const StepTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`;

export const StepDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;
