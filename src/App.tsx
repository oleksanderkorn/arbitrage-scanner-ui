import { useEffect, useState } from "react";
import "./App.css";
import useWebSocket, { ReadyState } from "react-use-websocket";
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

// const socketUrl = "ws://localhost:3000/prices";
const socketUrl = "wss://arbitrage-scanner.herokuapp.com/prices";

function App() {
  const { lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => console.log("WebSocket Client Connected"),
    shouldReconnect: (closeEvent) => true,
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    if (lastMessage !== null) {
      setAssets((prev) => {
        return [
          ...prev,
          JSON.parse(lastMessage.data as string) as unknown as Asset,
        ];
      });
    }
  }, [lastMessage]);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Arbitrage Scanner ({connectionStatus})
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
