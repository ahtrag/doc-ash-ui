export const data = [
  {
    name: "Kadek Sastrawan",
    surname: "Sastrawan",
    birthYear: 1999,
    birthPlace: "Badung",
    gender: 3
  },
  {
    name: "Gartha Prasidhiyanta",
    surname: "Prasidhiyanta",
    birthYear: 1995,
    birthPlace: "Denpasar",
    gender: 4
  }
];

export const columns = [
  {
    label: "Name",
    key: "name"
  },
  {
    label: "Surname",
    key: "surname"
  },
  {
    label: "Birth Year",
    key: "birthYear",
    type: "numeric"
  },
  {
    label: "Birth Place",
    key: "birthPlace"
  },
  {
    label: "Gender",
    key: "gender",
    type: "select",
    option: {
      1: "Male",
      2: "Female",
      3: "Rather not say",
      4: `I'm apache helicopter`
    }
  }
];

export const allProps = [
  {
    label: "Property",
    key: "property"
  },
  {
    label: "Type",
    key: "type"
  },
  {
    label: "Default",
    key: "default"
  },
  {
    label: "Description",
    key: "description"
  }
];

export const appDrawerProps = [
  {
    property: "title",
    type: "string or element",
    default: "",
    description: "isRequired"
  },
  {
    property: "profile",
    type: "string or element",
    default: "",
    description: ""
  },
  {
    property: "showMenu",
    type: "boolean",
    default: "false",
    description: ""
  },
  {
    property: "menuList",
    type: "data : arrayOfObject, className : string",
    default: "",
    description: ""
  },
  {
    property: "className",
    type: "string",
    default: "",
    description: ""
  },
  {
    property: "style",
    type: "object",
    default: "",
    description: ""
  },
  {
    property: "children",
    type: "string, element, arrayOfElement",
    default: "",
    description: ""
  }
];

export const avatarProps = [
  {
    property: "src",
    type: "string",
    default: "",
    description: ""
  },
  {
    property: "alt",
    type: "string",
    default: "",
    description: ""
  },
  {
    property: "size",
    type: "number",
    default: "40",
    description: ""
  },
  {
    property: "className",
    type: "string",
    default: "",
    description: ""
  },
  {
    property: "style",
    type: "object",
    default: "",
    description: ""
  },
  {
    property: "children",
    type: "string, element",
    default: "",
    description: ""
  }
];

export const buttonProps = [
  {
    property: "type",
    type: "button, submit, reset",
    default: "button",
    description: ""
  },
  {
    property: "variant",
    type: "contained, outlined, text",
    default: "text",
    description: ""
  },
  {
    property: "onClick",
    type: "function",
    default: "",
    description: ""
  },
  {
    property: "className",
    type: "string",
    default: "",
    description: ""
  },
  {
    property: "style",
    type: "object",
    default: "",
    description: ""
  },
  {
    property: "children",
    type: "any",
    default: "",
    description: ""
  }
];

export const dividerProps = [
  {
    property: "variant",
    type: "fullWidth, inset, middle",
    default: "fullWidth",
    description: ""
  },
  {
    property: "className",
    type: "string",
    default: "",
    description: ""
  },
  {
    property: "style",
    type: "object",
    default: "",
    description: ""
  }
];

export const iconButtonProps = [
  {
    property: "disable",
    type: "boolean",
    default: "false",
    description: ""
  },
  {
    property: "disableRipple",
    type: "boolean",
    default: "false",
    description: ""
  },
  {
    property: "onClick",
    type: "function",
    default: "",
    description: ""
  },
  {
    property: "className",
    type: "string",
    default: "",
    description: ""
  },
  {
    property: "style",
    type: "object",
    default: "",
    description: ""
  },
  {
    property: "children",
    type: "element",
    default: "",
    description: "isRequired, See https://github.com/levrik/mdi-react"
  }
];

export const loadingProps = [
  {
    property: "random",
    type: "boolean",
    default: "true",
    description: "randomly change color every 3 seconds"
  },
  {
    property: "color",
    type: "string",
    default: "black",
    description: "change color of the loading"
  }
];

export const modalProps = [
  {
    property: "header",
    type: "string, arrayOfElement, element",
    default: "true",
    description: "header of modal"
  },
  {
    property: "footer",
    type: "string, arrayOfElement, element",
    default: "",
    description: "footer of modal"
  },
  {
    property: "show",
    type: "boolean",
    default: "",
    description: "flag of showing modal"
  },
  {
    property: "close",
    type: "boolean",
    default: "",
    description: "function close modal onClick overlay"
  },
  {
    property: "className",
    type: "string",
    default: "",
    description: "override styling using className"
  },
  {
    property: "style",
    type: "object",
    default: "",
    description: "override styling using style"
  },
  {
    property: "children",
    type: "string, arrayOfElement, element",
    default: "",
    description: "content of modal"
  }
];

export const paperProps = [
  {
    property: "elevation",
    type: "lower, low, mid, top, upper",
    default: "mid",
    description: "elevation level of paper"
  },
  {
    property: "className",
    type: "string",
    default: "",
    description: "override styling using className"
  },
  {
    property: "style",
    type: "object",
    default: "",
    description: "override styling using style"
  },
  {
    property: "children",
    type: "string, arrayOfElement, element",
    default: "",
    description: "content of paper"
  }
];

export const selectProps = [
  {
    property: "variant",
    type: "outlined, default",
    default: "default",
    description: "variant of select"
  },
  {
    property: "value",
    type: "string, number",
    default: "",
    description: "value of select"
  },
  {
    property: "onChange",
    type: "function",
    default: "",
    description: "event handler of select"
  },
  {
    property: "fullWidth",
    type: "boolean",
    default: "false",
    description: "enabling select to fit its container"
  },
  {
    property: "label",
    type: "string",
    default: "",
    description: "label of select"
  },
  {
    property: "id",
    type: "string",
    default: "",
    description: "identifier of select using id"
  },
  {
    property: "name",
    type: "string",
    default: "",
    description: "identifier of select using name"
  },
  {
    property: "extra",
    type: "start : element, end : element",
    default: "",
    description: "identifier of select using name"
  },
  {
    property: "noMargin",
    type: "boolean",
    default: "false",
    description: "make select has no default margin"
  },
  {
    property: "className",
    type: "string",
    default: "",
    description: ""
  },
  {
    property: "style",
    type: "object",
    default: "",
    description: ""
  },
  {
    property: "children",
    type: "any",
    default: "",
    description: "content of select"
  }
];

export const switchProps = [
  {
    property: "switchValue",
    type: "arrayOfTwoValueString",
    default: "mid",
    description: "isRequired, two value of switch"
  },
  {
    property: "active",
    type: "string",
    default: "",
    description: "isRequired, active of value of switchValue property"
  },
  {
    property: "noLabel",
    type: "boolean",
    default: "false",
    description: "enabling switch without label"
  },
  {
    property: "onSwitch",
    type: "function",
    default: "",
    description: "isRequired, event handler of changing value of switch"
  },
  {
    property: "className",
    type: "string",
    default: "",
    description: ""
  },
  {
    property: "style",
    type: "object",
    default: "",
    description: ""
  }
];

export const textInputProps = [
  {
    property: "variant",
    type: "outlined, default",
    default: "default",
    description: "variant of textInput"
  },
  {
    property: "value",
    type: "string",
    default: "",
    description: "value of textInput"
  },
  {
    property: "placeholder",
    type: "string",
    default: "",
    description: "placeholder of textInput"
  },
  {
    property: "type",
    type: "text, email, password, number, tel",
    default: "text",
    description: "type of textInput"
  },
  {
    property: "onChange",
    type: "function",
    default: "",
    description: "event handler of textInput"
  },
  {
    property: "fullWidth",
    type: "boolean",
    default: "false",
    description: "enabling textInput to fit its container"
  },
  {
    property: "noMargin",
    type: "boolean",
    default: "false",
    description: "make textInput has no default margin"
  },
  {
    property: "label",
    type: "string",
    default: "",
    description: "label of textInput"
  },
  {
    property: "id",
    type: "string",
    default: "",
    description: "identifier of textInput using id"
  },
  {
    property: "name",
    type: "string",
    default: "",
    description: "identifier of textInput using name"
  },
  {
    property: "extra",
    type: "start : element, end : element",
    default: "",
    description: "identifier of textInput using name"
  },
  {
    property: "className",
    type: "string",
    default: "",
    description: ""
  },
  {
    property: "style",
    type: "object",
    default: "",
    description: ""
  },
  {
    property: "children",
    type: "any",
    default: "",
    description: "content of select"
  }
];

export const tableProps = [
  {
    property: "data",
    type: "object",
    default: "",
    description: "object of table"
  },
  {
    property: "column",
    type: "arrayOf[label : string, key : string, type: 'numeric']",
    default: "",
    description: "isRequired,column of table"
  },
  {
    property: "title",
    type: "element, string",
    default: "",
    description: "title of table"
  },
  {
    property: "defaultSort",
    type: "type: 'ascending', 'descending', column : string",
    default: "",
    description:
      "sorting a column in table by ascending or descending before render, required in both props"
  },
  {
    property: "disableEmptyRows",
    type: "boolean",
    default: "false",
    description: "remove unused white space of table"
  },
  {
    property: "disableSearch",
    type: "boolean",
    default: "false",
    description: "disable search feature of table"
  },
  {
    property: "disableSort",
    type: "boolean",
    default: "false",
    description: "disable sort feature of table"
  },
  {
    property: "disablePagination",
    type: "boolean",
    default: "false",
    description: "disable pagination feature of table"
  },
  {
    property: "editable",
    type: "onAdd : function, onUpdate: function, onDelete: function",
    default: "",
    description: "enable action CRUD on table"
  }
];
