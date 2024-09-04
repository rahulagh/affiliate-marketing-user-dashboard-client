import React from 'react';
import BenefitsSectionComponent from '../BenefitsSection/BenefitsSection';
import {HeroSection, HeroTitle, HeroSubtitle, JoinButton, StepsSection, StepsTitle, StepsGrid, StepDescription, StepTitle, StepItem, StepIcon} from './Home.styles';


const Home = () => (
  <>
    <HeroSection>
      <HeroTitle>Join Our Affiliate Program</HeroTitle>
      <HeroSubtitle>
          Join our Affiliate Program and earn commissions by promoting our products and services. As an affiliate, you'll receive a unique referral link to share with your audience.
      </HeroSubtitle>
      <JoinButton>JOIN FOR FREE</JoinButton>
    </HeroSection>
    <StepsSection>
      <StepsTitle>How to get started</StepsTitle>
      <StepsGrid>
        <StepItem>
          <StepIcon>👤</StepIcon>
          <StepTitle>SignUp</StepTitle>
          <StepDescription>Join Affiliate program. Joining is fast, easy, and free</StepDescription>
        </StepItem>
        <StepItem>
          <StepIcon>📢</StepIcon>
          <StepTitle>Promote</StepTitle>
          <StepDescription>Choose from our tracked assets (links and banners) or create custom links and implement on your website.</StepDescription>
        </StepItem>
        <StepItem>
          <StepIcon>🚀</StepIcon>
          <StepTitle>Drive Traffic</StepTitle>
          <StepDescription>Incentivize your users to land on Affiliate Marketing through contextual placements of banners and links</StepDescription>
        </StepItem>
        <StepItem>
          <StepIcon>💰</StepIcon>
          <StepTitle>Earn</StepTitle>
          <StepDescription>Earn competitive commission on eligible purchases that your users make on Affiliate Program</StepDescription>
        </StepItem>
      </StepsGrid>
    </StepsSection>
    <BenefitsSectionComponent />
  </>
);

export default Home;
