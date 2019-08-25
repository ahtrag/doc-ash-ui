import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import AppDrawer from "../../components/AppDrawer";
import GithubCircleIcon from "mdi-react/GithubCircleIcon";
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
    marginLeft: 245
  },
  appBar: {
    background: "black"
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

const AppDrawerComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>AppDrawer Component</h2>
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
          <AppDrawer
            title="Title"
            profile={<GithubCircleIcon />}
            className={classes.appBar}
          />
        </div>`}
        >
          <div className={classes.component}>
            <div className={classes.code}>
              <AppDrawer
                title="Title"
                profile={<GithubCircleIcon />}
                className={classes.appBar}
              />
            </div>
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default AppDrawerComponent;
