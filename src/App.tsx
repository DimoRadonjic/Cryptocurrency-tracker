import { useEffect, useState } from 'react';
import Chart from './components/Chart/Chart';
import { Asset } from './interfaces/AssetInterfaces';
import './App.scss';
import { fetchAssetData } from './api/api';
import {
  formatNumberToAbbreviated,
  formatNumberToPercentage,
} from './utils/FormatterUtil';
import { sortByDateAscending } from './utils/SortUtil';

const App = () => {
  const [data, setData] = useState<Asset>({} as Asset);

  useEffect(() => {
    (async () => {
      try {
        const { assetId, aprHistory, tvlStakedHistory }: Asset =
          await fetchAssetData();
        setData({
          assetId,
          aprHistory: sortByDateAscending(aprHistory),
          tvlStakedHistory: sortByDateAscending(tvlStakedHistory),
        });
      } catch (error) {
        console.error('GetData Error : ', error);
      }
    })();
  }, []);

  return (
    <div className='flex-container'>
      <Chart
        title='Asset APR (y)'
        data={data.aprHistory}
        formatNumber={formatNumberToPercentage}
      />
      <Chart
        title='Asset TVL'
        data={data.tvlStakedHistory}
        formatNumber={formatNumberToAbbreviated}
      />
    </div>
  );
};

export default App;
