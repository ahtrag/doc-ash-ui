import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Button from "../../components/Button";
import Tooltip from "../../components/Tooltip";
import Table from "../../components/Table";
import { allProps, appDrawerProps } from "../../utils/data";

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
    height: 200,
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

const TooltipComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Tooltip Component</h2>
      </div>
      <div className={classes.table}>
        <Table
          columns={allProps}
          data={appDrawerProps}
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
            <Tooltip label="Tooltip">
              <Button
                variant="contained"
                style={{ background: "black" }}
              >
                Hover Me
              </Button>
            </Tooltip>
          </div>
        `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <Tooltip label="Tooltip">
              <Button variant="contained" style={{ background: "black" }}>
                Hover Me
              </Button>
            </Tooltip>
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default TooltipComponent;
