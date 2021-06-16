import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Homepage = ({ users }) => {
  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     axios.get("http://localhost:8000/").then((res) => {
  //       setUsers(res.data);
  //     });
  //   }, []);
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h3" />
                ID
              </TableCell>
              <TableCell>
                <Typography variant="h3" />
                Name
              </TableCell>
              <TableCell>
                <Typography variant="h3" />
                Email
              </TableCell>
              <TableCell>
                <Typography variant="h3" />
                Phone
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => {
              return (
                <TableRow>
                  <TableCell>
                    <Typography variant="h4" />
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" />
                    {row.name}
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" />
                    {row.email}
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" />
                    {row.phone}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Homepage;
