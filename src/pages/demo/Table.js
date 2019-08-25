import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Table from "../../components/Table";
import { data, columns } from "../../utils/data";
import { allProps, tableProps } from "../../utils/data";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    flexDirection: "column"
  },
  code: {
    marginTop: 36
  },
  component: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  table: {
    margin: 20
  }
});

const TableComponent = props => {
  const classes = useStyles();
  const [dataSource, setDataSource] = useState(data.slice());
  console.log("STATE WI GARTHA", dataSource);
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Table Component</h2>
      </div>
      <div className={classes.table}>
        <Table
          columns={allProps}
          data={tableProps}
          disableEmptyRows
          disablePagination
          disableSearch
          disableSort
        />
      </div>
      <div>
        <ReactCodeSnippet
          lang="jsx"
          code={`
          <div>
            <Table
                title="Ash-Ui Table"
                data={dataSource}
                columns={columns}
                disabledEmptyRows={true}
                editable={{
                  onAdd: newData => {
                    const tempData = dataSource.slice();
                    tempData.push(newData);
                    setDataSource(tempData);
    
                    console.log("ADD", newData);
                  },
                  onUpdate: (oldData, newData) => {
                    const tempData = dataSource.slice();
                    const index = tempData.indexOf(oldData);
                    tempData[index] = newData;
                    setDataSource(tempData);
    
                    console.log("UPDATE", oldData, newData);
                  },
                  onDelete: oldData => {
                    const tempData = dataSource.slice();
                    const index = tempData.indexOf(oldData);
                    tempData.splice(index, 1);
                    setDataSource(tempData);
                    console.log("DELETE", oldData);
                  }
                }}
            />
          </div>
        `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <Table
              title="Ash-Ui Table"
              data={dataSource}
              columns={columns}
              disableEmptyRows
              editable={{
                onAdd: newData => {
                  const tempData = dataSource.slice();
                  tempData.push(newData);
                  // setDataSource(tempData);

                  console.log("ADD", newData);
                },
                onUpdate: (oldData, newData) => {
                  const tempData = dataSource.slice();
                  const index = tempData.indexOf(oldData);
                  console.log("TempData", tempData);
                  tempData[index] = newData;
                  // setDataSource(tempData);

                  console.log("UPDATE", oldData, newData);
                },
                onDelete: oldData => {
                  const tempData = dataSource.slice();
                  const index = tempData.indexOf(oldData);
                  tempData.splice(index, 1);
                  // setDataSource(tempData);
                  console.log("DELETE", oldData);
                }
              }}
            />
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default TableComponent;
