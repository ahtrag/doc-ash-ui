import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import ReactCodeSnippet from "react-code-snippet";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { allProps, modalProps } from "../../utils/data";

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
    show: false
  });
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Modal Component</h2>
      </div>
      <div className={classes.table}>
        <Table
          columns={allProps}
          data={modalProps}
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
              onClick={() => setState({ ...state, show: !state.show })}
              className={classes.classNameTest}
              style={{ background: "white", color: "black" }}
            >
              Modal
            </Button>
          {state.show ? (
            <Modal
              show={state.show}
              header="Header"
              footer={
                <Button
                  onClick={() => setState({ ...state, show: !state.show })}
                >
                  Close
                </Button>
              }
              close={() => setState({ ...state, show: !state.show })}
            >
              Body
            </Modal>
          ) : null}
        </div>
        `}
        >
          <div className={classes.component}>
            <div className={classes.code} />
            <Button
              variant="contained"
              onClick={() => setState({ ...state, show: !state.show })}
              style={{ background: "black", color: "white" }}
            >
              {state.show ? "Modal Show" : "Modal Not Show"}
            </Button>

            {state.show ? (
              <Modal
                show={state.show}
                header="Header"
                footer={
                  <Button
                    onClick={() => setState({ ...state, show: !state.show })}
                  >
                    Close
                  </Button>
                }
                close={() => setState({ ...state, show: !state.show })}
              >
                Body
              </Modal>
            ) : null}
          </div>
        </ReactCodeSnippet>
      </div>
    </div>
  );
};

export default ModalComponent;
