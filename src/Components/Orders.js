import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, time, temperature, humidity) {
  return { id, date, time, temperature, humidity };
}

const rows = [
  createData(0, "16 Mar, 2019", "16:04 ", "24", "46%"),
  createData(1, "16 Mar, 2019", "16:05 ", "26", "42%"),
  createData(2, "16 Mar, 2019", "16:06 ", "25", "43%"),
  createData(3, "16 Mar, 2019", "16:07 ", "23", "47%"),
];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Temprature And Humidity Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Temprature</TableCell>
            <TableCell>Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.temperature}</TableCell>
              <TableCell>{row.humidity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}></div>
    </React.Fragment>
  );
}
