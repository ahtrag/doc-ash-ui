import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputWrapper: {
    marginTop: 16,
    marginBottom: 4,
    display: "inline-flex",
    position: "relative"
  },
  inputField: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    padding: "0 8px",
    margin: 0,
    border: "1px solid #A7A7A7",
    boxSizing: "border-box"
  },
  inputLegend: {
    padding: 0,
    margin: 0,
    width: 0.1,
    lineHeight: 0,
    transition: "width 0.3s ease-in-out"
  },
  inputLabel: {
    position: "absolute",
    top: 16,
    left: 8,
    zIndex: 5,
    transform: "scale(1)",
    cursor: "pointer",
    transition:
      "transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out"
  },
  focusInputLabel: {
    transform: "scale(0.8)",
    top: -10,
    left: 8
  },
  input: {
    position: "relative",
    backgroundColor: "transparent",
    minWidth: 125,
    minHeight: 50,
    width: "100%",
    padding: 8,
    boxSizing: "border-box",
    border: 0,
    "&:focus": {
      outline: "none"
    }
  },
  extraStart: {
    display: "flex",
    marginLeft: 8,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  extraEnd: {
    display: "flex",
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  fullWidth: {
    width: "100%"
  }
});

const TextInputOutlined = props => {
  const {
    label,
    value,
    id,
    name,
    placeholder,
    type,
    extra,
    className,
    style,
    onChange,
    fullWidth
  } = props;
  const [focus, setFocus] = useState(false);
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef(null);
  const classes = useStyles();
  const defaultStyles = [classes.input, classes.fullWidth, className]
    .filter(value => Boolean(value))
    .join(" ");

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.getBoundingClientRect().width);

      if (extra && extra.start) {
        setFocus(true);
      }
    }
  }, [labelRef, extra]);

  return (
    <div
      className={`${classes.inputWrapper}${
        fullWidth ? ` ${classes.fullWidth}` : ""
      }`}
    >
      <fieldset className={classes.inputField}>
        <legend
          className={classes.inputLegend}
          style={{ width: label && (focus || value) ? labelWidth : "" }}
        >
          &#8203;
        </legend>
      </fieldset>

      {extra && extra.start && (
        <div className={classes.extraStart}>{extra.start}</div>
      )}
      <label
        ref={labelRef}
        htmlFor={id}
        className={`${classes.inputLabel} ${
          focus || value ? classes.focusInputLabel : ""
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={!label ? placeholder : focus ? placeholder : ""}
        value={value}
        id={id}
        name={name}
        className={defaultStyles}
        style={style}
        onChange={onChange}
        onFocus={() => (extra && extra.start ? null : setFocus(true))}
        onBlur={() => (extra && extra.start ? null : setFocus(false))}
      />
      {extra && extra.end && (
        <div className={classes.extraEnd}>{extra.end}</div>
      )}
    </div>
  );
};

TextInputOutlined.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password"]),
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool
};

export default TextInputOutlined;
