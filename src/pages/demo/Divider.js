import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Divider from "../../components/Divider";
import Table from "../../components/Table";
import { allProps, dividerProps } from "../../utils/data";

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

const DividerComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Divider Component</h2>
      </div>
      <div className={classes.table}>
        <Table
          columns={allProps}
          data={dividerProps}
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
            <Divider
              variant="middle"
              style={{ backgroundColor: "white", height: "2px" }}
            />
          </div>
        `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <Divider
              variant="middle"
              style={{ backgroundColor: "gray", height: "2px" }}
            />
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default DividerComponent;
