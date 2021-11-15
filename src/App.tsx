import React, { useEffect, useState } from "react";
import "./App.css";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Asset } from "./types";
import AssetsGrid from "./AssetsGrid";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

const client = new W3CWebSocket("ws://127.0.0.1:8080/prices");

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);
  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      console.log(message);
      setAssets((prev) => {
        return [
          ...prev,
          JSON.parse(message.data as string) as unknown as Asset,
        ];
      });
    };
  });

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Arbitrage Scanner
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setAssets([])}
            >
              <RefreshIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: "1vh" }}
      >
        <Grid item lg={8} md={10} xs={12}>
          <AssetsGrid assets={assets} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
