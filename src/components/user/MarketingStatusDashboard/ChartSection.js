import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ChartTitle, ChartContainer } from './MarketingStatus.styles';

const ChartSection = ({ data }) => (
  <>
    <ChartContainer>
      <ChartTitle>Commission Breakdown by Product</ChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data.commissionBreakdown}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="product" tick={{ fill: '#64748b' }} />
          <YAxis tick={{ fill: '#64748b' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#334155' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="commission" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>

    <ChartContainer>
      <ChartTitle>Performance Over Time</ChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data.performanceOverTime}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="date" tick={{ fill: '#64748b' }} />
          <YAxis yAxisId="left" tick={{ fill: '#64748b' }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fill: '#64748b' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#334155' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#3b82f6" strokeWidth={2} />
          <Line yAxisId="left" type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={2} />
          <Line yAxisId="right" type="monotone" dataKey="earnings" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  </>
);

export default ChartSection;