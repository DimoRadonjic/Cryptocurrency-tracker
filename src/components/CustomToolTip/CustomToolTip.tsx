import { TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/src/component/DefaultTooltipContent';
import { formatDate } from '../../utils/FormatterUtil';
import './CustomToolTip.scss';

interface CustomToolTipProps extends TooltipProps<ValueType, NameType> {
  formatNumber: (x: number) => string;
};

const CustomToolTip = ({
  active,
  payload,
  label,
  formatNumber,
}: CustomToolTipProps) => {
  const value = payload?.[0]?.payload.value;

  if (!active) {
    return null;
  }

  return (
    <div className='custom-tooltip'>
      <p className='label'>Date : {formatDate(label)}</p>
      <p className='label'>Value : {formatNumber(value)}</p>
    </div>
  );
};

export default CustomToolTip;
