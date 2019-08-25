import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Switch from "../../components/Switch";
import Table from "../../components/Table";
import { allProps, switchProps } from "../../utils/data";

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

const ModalComponent = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    active: "On"
  });
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Switch Component</h2>
      </div>
      <div className={classes.table}>
        <Table
          columns={allProps}
          data={switchProps}
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
            <Switch
              switchValues={["On", "Off"]}
              active={state.active}
              onSwitch={value => setState({ ...state, active: value })}
            />
          </div>
         `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <Switch
              switchValues={["On", "Off"]}
              active={state.active}
              onSwitch={value => setState({ ...state, active: value })}
            />
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default ModalComponent;
