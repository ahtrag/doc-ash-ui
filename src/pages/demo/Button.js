import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { allProps, buttonProps } from "../../utils/data";

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

const ButtonComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Button Component</h2>
      </div>

      <div className={classes.table}>
        <Table
          columns={allProps}
          data={buttonProps}
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
            <Button
              variant="contained"
              onClick={() => console.log("Clicked")}
              style={{background : 'black'}}
              >
              Button
            </Button>
          </div>
        `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <Button
              variant="contained"
              onClick={() => console.log("Clicked")}
              style={{ background: "black" }}
            >
              Button
            </Button>
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default ButtonComponent;
