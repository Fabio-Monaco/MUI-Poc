import * as React from "react";
import { DataGrid, GridColumns, GridRowsProp } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate
} from "@mui/x-data-grid-generator";
import { Box } from "@mui/material";

const columns: GridColumns = [
  { field: "name", headerName: "Name", width: 130, editable: true },
  {
    field: "age",
    headerName: "Age",
    width: 50,
    type: "number",
    editable: true
  },
  {
    field: "dateCreated",
    headerName: "Date Created",
    type: "date",
    width: 110,
    editable: true
  },
  {
    field: "lastLogin",
    headerName: "Last Login",
    type: "dateTime",
    width: 220,
    editable: true
  }
];

const rows: GridRowsProp = [
  {
    id: 1,
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 2,
    name: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 3,
    name: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 4,
    name: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 5,
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  },
  {
    id: 6,
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate()
  }
];
export function EditableDataGridMui() {
  return (
    <Box
      mt={3}
      sx={{
        height: 450,
        width: {
          xs: 300, // theme.breakpoints.up('xs')
          sm: 700, // theme.breakpoints.up('sm')
          md: 1000, // theme.breakpoints.up('md')
          lg: 600, // theme.breakpoints.up('lg')
          xl: 700 // theme.breakpoints.up('xl')
        }
      }}
    >
      <DataGrid
        //sx={{marginTop: "2rem"}}
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5, 15, 25]}
        experimentalFeatures={{ newEditingApi: true }}
        checkboxSelection
      />
    </Box>
  );
}
