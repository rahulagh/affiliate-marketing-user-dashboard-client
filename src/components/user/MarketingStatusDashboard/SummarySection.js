import React from 'react';
import { SummaryContainer, SummaryCard, CardTitle, CardValue } from './MarketingStatus.styles';

const SummarySection = ({ data }) => (
  <SummaryContainer>
    <SummaryCard>
      <CardTitle>Total Links</CardTitle>
      <CardValue>{data.totalLinks}</CardValue>
    </SummaryCard>
    <SummaryCard>
      <CardTitle>Total Clicks</CardTitle>
      <CardValue>{data.totalClicks}</CardValue>
    </SummaryCard>
    <SummaryCard>
      <CardTitle>Total Conversions</CardTitle>
      <CardValue>{data.totalConversions}</CardValue>
    </SummaryCard>
    <SummaryCard>
      <CardTitle>Total Earnings</CardTitle>
      <CardValue>${data.totalEarnings}</CardValue>
    </SummaryCard>
    <SummaryCard>
      <CardTitle>Conversion Rate</CardTitle>
      <CardValue>{data.conversionRate}%</CardValue>
    </SummaryCard>
  </SummaryContainer>
);

export default SummarySection;
