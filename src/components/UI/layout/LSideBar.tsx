import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { SwipeableDrawer, Box } from "@material-ui/core";
import { Button } from "@Components/UI";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function LeftSideBar({ ...props }) {
  const classes = useStyles();
  const { open, onChange } = props;

  const history = useHistory();
  return (
    <>
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={onChange}
        onOpen={onChange}
      >
        <div className={classes.list} role="presentation" onClick={onChange}>
          <Box p={1}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              // className={classes.button}
              color="primary"
              label="LOGIN"
              onClick={() => history.push('/app/products')}
            />
          </Box>
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default LeftSideBar;
