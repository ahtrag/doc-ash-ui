import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import IconButton from "../../components/IconButton";
import AccountIcon from "mdi-react/AccountIcon";
import Table from "../../components/Table";
import { allProps, iconButtonProps } from "../../utils/data";

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

const IconButtonComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Icon Button Component</h2>
      </div>
      <div className={classes.table}>
        <Table
          columns={allProps}
          data={iconButtonProps}
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
            <IconButton>
              <AccountIcon style={{ color: "black" }} />
            </IconButton>
          </div>
        `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <IconButton>
              <AccountIcon style={{ color: "black" }} />
            </IconButton>
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default IconButtonComponent;
