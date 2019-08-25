import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Loading from "../../components/Loading";
import Table from "../../components/Table";
import { allProps, loadingProps } from "../../utils/data";

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

const LoadingComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Loading Component</h2>
      </div>
      <div className={classes.table}>
        <Table
          columns={allProps}
          data={loadingProps}
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
            <Loading random/>
          </div>
        `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <Loading random />
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default LoadingComponent;
