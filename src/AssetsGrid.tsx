import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Asset } from "./types";

const columns: GridColDef[] = [
  { field: "id", hide: true },
  { field: "asset", headerName: "Asset", width: 150 },
  {
    field: "basePoints",
    headerName: "Base Points",
    type: "number",
    width: 200,
  },
  {
    field: "binancePrice",
    headerName: "Binance Price",
    type: "number",
    width: 200,
  },
  {
    field: "coinbasePrice",
    headerName: "Coinbase Price",
    type: "number",
    width: 200,
  },
  {
    field: "binanceBips",
    headerName: "Binance Bips",
    type: "number",
    width: 200,
  },
  {
    field: "coinbaseBips",
    headerName: "Coinbase Bips",
    type: "number",
    width: 200,
  },
];

export default function AssetsGrid(props: { assets: Asset[] }) {
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={props.assets}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[10, 20, 50]}
      />
    </div>
  );
}
