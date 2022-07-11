export interface AssetHistory {
  date: string;
  value: number;
}

export interface Asset {
  assetId: string;
  aprHistory: AssetHistory[];
  tvlStakedHistory: AssetHistory[];
}
