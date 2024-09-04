import React from 'react';
import { Leaf, BarChart2, UserCheck } from 'lucide-react';
import {BenefitsSection, Title, BenefitDescription, BenefitItem, BenefitsGrid, BenefitTitle, IconWrapper} from './BenefitsSection.styles';


const benefits = [
  {
    icon: <Leaf size={24} color="#6e45e2" />,
    title: "Commissions",
    description: "Get competitive commission on any purchase made with your affiliate code."
  },
  {
    icon: <BarChart2 size={24} color="#6e45e2" />,
    title: "Tracking Dashboard",
    description: "Track clicks and purchases made with your affiliate code in real time."
  },
  {
    icon: <UserCheck size={24} color="#6e45e2" />,
    title: "Dedicated Account Manager",
    description: "Get instant help with your integration and to answer any questions."
  }
];

const BenefitsSectionComponent = () => {
  return (
    <BenefitsSection>
      <Title>What are the benefits of the affiliate program?</Title>
      <BenefitsGrid>
        {benefits.map((benefit, index) => (
          <BenefitItem key={index}>
            <IconWrapper>{benefit.icon}</IconWrapper>
            <BenefitTitle>{benefit.title}</BenefitTitle>
            <BenefitDescription>{benefit.description}</BenefitDescription>
          </BenefitItem>
        ))}
      </BenefitsGrid>
    </BenefitsSection>
  );
};

export default BenefitsSectionComponent;