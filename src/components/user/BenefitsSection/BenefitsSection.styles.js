import styled from 'styled-components';

export const BenefitsSection = styled.section`
  background: linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%);
  padding:40px 20px;
  color: white;
  font-family: Arial, sans-serif;
  border-radius:10px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconWrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
`;

export const BenefitTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const BenefitDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
`;
