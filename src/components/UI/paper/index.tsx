import React from "react";

import { Paper } from "@material-ui/core";

interface IProps {
  className?: string;
}

const CustomPaper: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <Paper {...rest} style={{ borderRadius: 0 }}>
      {children}
    </Paper>
  );
};

export default CustomPaper;
