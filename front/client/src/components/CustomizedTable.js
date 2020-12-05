import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

function createData(title, lgtm) {
  return { title, lgtm };
}

const rows = [
  createData("best practice for handling docker file", 159),
  createData("this is something every engineer should know", 237),
  createData("5 best book should software engineer read", 262),
  createData("how enginner be productive", 305),
  createData("this is the way to be pythonista", 356),
];

const CustomizedTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">LGTM: {row.lgtm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTable;
