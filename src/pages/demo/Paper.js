import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Paper from "../../components/Paper";
import Table from "../../components/Table";
import { allProps, paperProps } from "../../utils/data";

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
    alignItems: "center",
    marginBottom: "20px"
  },
  title: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    width: 500,
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  table: {
    margin: 20
  }
});

const PaperComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Paper Component</h2>
      </div>
      <div className={classes.table}>
        <Table
          columns={allProps}
          data={paperProps}
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
            <Paper 
              style={{
                width: 500,
                height: 250,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              elevation="mid"
            >
              This is Paper
            </Paper>
          </div>
        `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <Paper className={classes.paper} elevation="mid">
              This is Paper
            </Paper>
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default PaperComponent;
