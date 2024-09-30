import * as React from "react";
import { DataGrid, GridColumnMenu } from "@mui/x-data-grid";

export default function DataTable({ rows, columns }) {
    return (
        <div style={{ width: "100%" }}>
            <DataGrid
                slots={{ columnMenu: CustomColumnMenu }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                disableColumnMenu={false}
                pageSizeOptions={[5, 10]}
                checkboxSelection={false}
                autoHeight={true}
                sx={{
                    boxShadow: 2,
                    border: 2,
                    borderColor: "rgb(var(--border))",
                    "& .MuiDataGrid-cell:hover": {
                        color: "rgb(140,140,140)",
                    },
                    "& .MuiPopper-root": {
                        color: "rgb(0,0,0)", // Set the popup menu text color to black
                    },
                    ".MuiDataGrid-columnSeparator": {
                        display: "none",
                    },
                    px: 2,
                }}
            />
        </div>
    );
}

function CustomColumnMenu(props) {
    return (
        <GridColumnMenu
            {...props}
            sx={{
                color: "rgb(0,0,0)",
            }}
        />
    );
}
