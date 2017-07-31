import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

const NameSelector = ({ name, setName }) => {
  return (
    <div>
      <TextField
        id="name-selector"
        hintText="Search Name"
        floatingLabelText="Search Name"
        value={name}
        onChange={setName}
        style={{width: "100%", alignSelf: "center"}}
        fullWidth={true}
      />
    </div>
  );
};

NameSelector.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func
};

export default NameSelector;
