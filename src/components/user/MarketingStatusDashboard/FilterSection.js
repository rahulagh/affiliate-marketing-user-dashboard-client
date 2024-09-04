import React, { useState } from 'react';
import { Calendar, Download } from 'lucide-react';
import { FilterContainer, FilterInput, Button } from './MarketingStatus.styles';

const FilterSection = ({ onFilter, filteredData }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleExport = () => {
    const csvContent = [
      ['Date', 'Product', 'Commission'],
      ...filteredData.conversions.map((conversion) => [
        conversion.date,
        conversion.product,
        conversion.commission,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'marketing_performance.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };


  return (
    <FilterContainer>
      <div style={{ display: 'flex', gap: '12px' }}>
        <FilterInput
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <FilterInput
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Button onClick={() => onFilter(startDate, endDate)}>
          <Calendar size={18} />
          Apply Filter
        </Button>
      </div>
      <Button onClick={handleExport}>
        <Download size={18} />
        Export Data
      </Button>
    </FilterContainer>
  );
};

export default FilterSection;