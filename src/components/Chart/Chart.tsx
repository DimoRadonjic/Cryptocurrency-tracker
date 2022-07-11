import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import './Chart.scss';
import CustomToolTip from '../CustomToolTip/CustomToolTip';
import { AssetHistory } from '../../interfaces/AssetInterfaces';
import { formatDate } from '../../utils/FormatterUtil';

interface ChartProps {
  title: string;
  data: AssetHistory[];
  formatNumber: (x: number) => string;
};

const Chart = ({ title, data, formatNumber }: ChartProps) => {
  return (
    <div className='chart'>
      <div className='chart-container'>
        <h2>{title}</h2>

        <ResponsiveContainer width='100%' height={500}>
          <AreaChart
            data={data}
            margin={{ top: 25, right: 30, left: 20, bottom: 10 }}
          >
            <defs>
              <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='30%' stopColor='#403768ff' stopOpacity={0.7} />
                <stop offset='90%' stopColor='#375b87ff' stopOpacity={0.7} />
              </linearGradient>
            </defs>

            <Area
              dataKey='value'
              fill='url(#color)'
              type='monotone'
              unit='M'
              strokeLinecap='round'
              strokeWidth={2}
              stroke='#d750ffff'
              activeDot={{
                stroke: '#375b87ff',
                strokeWidth: 2,
                r: 5.5,
                fill: '#b2bdffff',
              }}
            />

            <XAxis
              dataKey='date'
              axisLine={false}
              tickLine={false}
              tickFormatter={(date) => formatDate(date)}
              tick={{ fill: '#b2bdffff', dy: 10 }}
              fontSize={14}
              interval={2}
            />

            <YAxis
              dataKey='value'
              axisLine={false}
              tickLine={false}
              allowDecimals={true}
              tickFormatter={(value: number) => `${formatNumber(value)}`}
              fontSize={13}
              tick={{ fill: '#b2bdffff' }}
              domain={['auto', 'auto']}
              tickCount={5}
              tickMargin={4}
            />
            <Tooltip content={<CustomToolTip formatNumber={formatNumber} />} />

            <CartesianGrid opacity={0.25} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
