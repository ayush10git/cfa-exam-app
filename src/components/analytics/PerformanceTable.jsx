"use client"
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

// Define the columns
const columns = [
  { id: "topic", label: "Topics", minWidth: 170, align: "center" },
  { id: "questionSolved", label: "Question Solved", minWidth: 100, align: "center" },
  { id: "correctlySolved", label: "Correctly Solved", minWidth: 150, align: "center" },
  { id: "accuracy", label: "Accuracy(%)", minWidth: 150, align: "center" },
  { id: "remarks", label: "Remarks", minWidth: 200, align: "center" },
];

// Create the row data
function createData(topic, questionSolved, correctlySolved, accuracy, remarks) {
  return { topic, questionSolved, correctlySolved, accuracy, remarks };
}

// Replace the sample data with your actual data
const rows = [
  createData("Rates and Returns", 20, 14, 70, "Conceptual Clarity Needed"),
  createData("The Time Value of Money in Finance", 11, 9, 81.8, "Needs Practice in Calculatives"),
  createData("Probability Trees and Conditional...", 15, 11, 73.3, "Needs Practice in Calculatives"),
  createData("Portfolio Mathematics", 16, 16, 100, "Strong Concept"),
  createData("Estimate and Inference", 14, 7, 50, "Conceptual Clarity Needed"),
  createData("Hypothesis Testing", 9, 4, 80, "Conceptual Clarity Needed"),
  createData("Simple Linear Regression", 18, 11, 61.1, "Needs Practice in Calculatives"),
  createData("Big Data Techniques", 10, 10, 100, "Strong Concept"),
  createData("Statistical Measures of Asset Return", 10, 6, 60, "Needs Practice in Calculatives"),
];

// Function to apply color based on remarks
const getRemarkStyle = (remark) => {
  switch (remark) {
    case "Strong Concept":
      return { color: "green" };
    case "Needs Practice in Calculatives":
      return { color: "red" };
    case "Conceptual Clarity Needed":
      return { color: "gold" };
    default:
      return {};
  }
};

export default function StickyHeadTable() {
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
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="font-semibold text-base"
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.topic}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="center">
                          {column.id === "remarks" ? (
                            <span style={getRemarkStyle(value)}>{value}</span>
                          ) : (
                            value
                          )}
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
  );
}
