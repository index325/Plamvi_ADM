import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { TextField, TextFieldProps } from "@material-ui/core";

const TF = withStyles((theme) => ({
  root: {
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: theme.palette.primary.light,
    },
  },
}))(TextField);

const TextF: React.FC<TextFieldProps> = ({ ...props }) => {
  return (
    <>
      <TF {...props} />
    </>
  );
};

export default TextF;
