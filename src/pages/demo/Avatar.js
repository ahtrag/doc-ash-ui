import React from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Avatar from "../../components/Avatar";
import Table from "../../components/Table";
import { allProps, avatarProps } from "../../utils/data";

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

const AvatarComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Avatar Component</h2>
      </div>

      <div className={classes.table}>
        <Table
          columns={allProps}
          data={avatarProps}
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
            <Avatar
              src="https://avatars0.githubusercontent.com/u/583231?s=460&v=4"
              alt="Octocat"
              size={100}
            />
          </div>
        `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <Avatar
              src="https://avatars0.githubusercontent.com/u/583231?s=460&v=4"
              alt="Octocato"
              size={100}
            />
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default AvatarComponent;
