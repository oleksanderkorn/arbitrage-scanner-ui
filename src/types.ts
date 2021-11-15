export interface Asset {
  id: number;
  asset: string;
  basePoints: number | null;
  binancePrice: number | null;
  binanceBips: number | null;
  coinbasePrice: number | null;
  coinbaseBips: number | null;
}
