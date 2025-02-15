import "antd/dist/antd.css";

import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Footer from "../components/Footer";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import "./Table.css";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },

  { id: "Subname", label: "Subname", minWidth: 170 },
  {
    id: "Content",
    label: "Content",
    minWidth: 300,
    align: "right",
    format: (value) => value.toLocaleString("ko-KR"),
  },


  {
    id: "Question",
    label: "Question",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("ko-KR"),
  },
  {
    id: "RegDate",
    label: "RegDate",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("ko-KR"),
  },
];

function createData(name, Subname, Content, Question, RegDate) {
  return { name, Subname, Content, Question, RegDate };
}

const rows = [
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
  createData(
    "김철수",
    "배송이 대체 언제오죠?? 참나 ㅡㅡ",
    "배송이 안되요 ㅠㅠㅠ 아직도 안왔어요 ㅠㅠㅠㅠㅠㅠㅠ",
    "✔",
    "2022-03-15"
  ),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <h1>고객센터</h1>

      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  Notice
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Link to="Post" className="TableBody">
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </Link>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <br />
      <Button variant="outlined" href="Write">
        글쓰기
      </Button>
    </div>
  );
}
