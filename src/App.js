import React from "react";
import { useState, useEffect, useRef } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

let counter = 1;
function createData(tick) {
  const { p:price, q:amount_without_signal, m:market } = tick.data;
  const amount = market ? amount_without_signal : amount_without_signal*-1;

  return {
    key: counter++,
    exchange: "binance",
    price,
    amount,
  };
}

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

export default function App() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const webSocket = useRef(null);

  useEffect(() => {
    // ['bitfinex', 23320, 0.00012313]
    webSocket.current = new WebSocket("wss://fstream.binance.com/stream?streams=btcusdt@trade");
    webSocket.current.onmessage = (row) => {
      // console.log(row);
      const tick = JSON.parse(row.data);
      //console.log(tick);
      setRows((prev) => [createData(tick), ...prev]);
    };
    return () => webSocket.current.close();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Exchange</StyledTableCell>
            <StyledTableCell align="right">Prize</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.key}>
              <StyledTableCell align="right">{row.exchange}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
