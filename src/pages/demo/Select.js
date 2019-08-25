import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Select from "../../components/Select";
import Table from "../../components/Table";
import { allProps, selectProps } from "../../utils/data";

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

const SelectComponent = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    optionValue: ""
  });
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Select Component</h2>
      </div>
      <div className={classes.table}>
        <Table
          columns={allProps}
          data={selectProps}
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
            <Select
              variant="default"
              value={state.optionValue}
              onChange={e => setState({ ...state, optionValue: e.target.value })}
              label="Select"
              id="Select"
              className={classes.classNameTest}
              style={{ color: "black" }}
            >
              <option value={0} />
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
              <option value={3}>Option 3</option>
            </Select>
          </div>
        `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <Select
              variant="default"
              value={state.optionValue}
              onChange={e =>
                setState({ ...state, optionValue: e.target.value })
              }
              label="Select"
              id="Select"
              className={classes.classNameTest}
              style={{ color: "black" }}
            >
              <option value={0} />
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
              <option value={3}>Option 3</option>
            </Select>
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default SelectComponent;
