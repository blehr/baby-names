import React from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import CircularProgress from 'material-ui/CircularProgress';

const LoadingIndictor = ({ isFetching }) => {
  return (
    <Dialog
      modal={true}
      open={isFetching}
      style={{textAlign: "center"}} 
    >
      <CircularProgress size={60} thickness={7} />
    </Dialog>
  );
};

LoadingIndictor.propTypes = {
  isFetching: PropTypes.bool
};

export default LoadingIndictor;
