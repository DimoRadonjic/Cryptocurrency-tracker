import axios from 'axios';
import { Asset } from '../interfaces/AssetInterfaces';

const api: string =
  'https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/BNB_Pancakeswap__WBNB-BUSD';

export async function fetchAssetData(): Promise<Asset> {
  const { assetId, aprHistory, tvlStakedHistory } = (await axios.get(api)).data;
  return { assetId, aprHistory, tvlStakedHistory } as Asset;
}
