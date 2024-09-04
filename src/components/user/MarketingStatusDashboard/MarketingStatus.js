import React, { useState } from 'react';
import { DashboardContainer, Header } from './MarketingStatus.styles';
import FilterSection from './FilterSection';
import SummarySection from './SummarySection';
import ChartSection from './ChartSection';
import ConversionDetails from './ConversionDetails';
import dummyData from './dummyData';

const MarketingStatusDashboard = () => {
  const [showConversions, setShowConversions] = useState(false);
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleFilter = (startDate, endDate) => {
    if (startDate && endDate) {
      const filtered = {
        ...dummyData,
        conversions: dummyData.conversions.filter(
          (conversion) => conversion.date >= startDate && conversion.date <= endDate
        ),
        performanceOverTime: dummyData.performanceOverTime.filter(
          (data) => data.date >= startDate && data.date <= endDate
        ),
      };
      setFilteredData(filtered);
    } else {
      setFilteredData(dummyData);
    }
  };

  return (
    <DashboardContainer>
      <Header>Marketing Status Dashboard</Header>
      <FilterSection onFilter={handleFilter} filteredData={filteredData} />
      <SummarySection data={filteredData} />
      <ChartSection data={filteredData} />
      <ConversionDetails 
        showConversions={showConversions}
        setShowConversions={setShowConversions}
        conversions={filteredData.conversions}
      />
    </DashboardContainer>
  );
};

export default MarketingStatusDashboard;
