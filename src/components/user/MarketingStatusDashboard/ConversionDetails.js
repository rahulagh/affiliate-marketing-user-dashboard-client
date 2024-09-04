import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ToggleButton, ConversionItem, ConversionList, ChartTitle } from './MarketingStatus.styles';

const ConversionDetails = ({ showConversions, setShowConversions, conversions }) => (
  <>
    <ToggleButton onClick={() => setShowConversions(!showConversions)} active={showConversions}>
      {showConversions ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      {showConversions ? 'Hide Conversion Details' : 'Show Conversion Details'}
    </ToggleButton>

    {showConversions && (
      <div>
        <ChartTitle>Conversion Details</ChartTitle>
        <ConversionList>
          {conversions.map((conversion, index) => (
            <ConversionItem key={index}>
              <span><strong>Date:</strong> {conversion.date}</span>
              <span><strong>Product:</strong> {conversion.product}</span>
              <span><strong>Commission:</strong> ${conversion.commission}</span>
            </ConversionItem>
          ))}
        </ConversionList>
      </div>
    )}
  </>
);

export default ConversionDetails;